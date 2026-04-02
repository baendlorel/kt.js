# PseudoRef 内存占用分析报告

## 1. 结构对比

### KTRef 的继承链
```
KTReactiveLike (抽象基类)
  └─ kid: number
  └─ ktype: KTReactiveType
  └─ abstract value: T
  └─ abstract addOnChange()
  └─ abstract removeOnChange()
  └─ map()

KTReactive (抽象基类) extends KTReactiveLike
  └─ _value: T
  └─ _changeHandlers: Map<any, ChangeHandler<T>>  ← 主要内存开销
  └─ _emit()
  └─ addOnChange()
  └─ removeOnChange()
  └─ notify()
  └─ clearOnChange()

KTRef extends KTReactive
  └─ get value()
  └─ set value()
  └─ draft
  └─ subref()
```

### PseudoRef 的结构
```typescript
class PseudoRef<T> implements KTReactiveLike<T>
  └─ kid: number = -1
  └─ ktype = KTReactiveType.RefLike
  └─ public value: T
  └─ addOnChange() → 空实现
  └─ removeOnChange() → 空实现
  └─ map() → throw Error
```

## 2. V8 引擎内存分析

### Class 实例内存构成

V8 中每个对象的内存由以下部分组成：

| 部分 | 大小 | 说明 |
|------|------|------|
| 对象头 | 16-32 bytes | 隐藏类指针、属性数量等 |
| 属性值 | 取决于类型 | number: 8 bytes, 指针: 8 bytes |
| 对齐填充 | 0-8 bytes | 内存对齐要求 |

### KTRef 实例估算

```
对象头:                    ~24 bytes
kid (number):              ~8 bytes
ktype (number):            ~8 bytes
_value (T):                取决于 T
_changeHandlers (Map):     ~200-240 bytes  ← 关键差异
  ├─ Map 内部结构:         ~160 bytes
  ├─ 空 hash 表:           ~32 bytes
  └─ 预留空间:             ~8-48 bytes
-------------------------------------------
总计 (不含 value):         ~240-280 bytes
```

### PseudoRef 实例估算

```
对象头:                    ~24 bytes
kid (number):              ~8 bytes
ktype (number):            ~8 bytes
value (T):                 取决于 T
-------------------------------------------
总计 (不含 value):         ~40-56 bytes
```

## 3. 内存差异结论

| 指标 | KTRef | PseudoRef | 节省 |
|------|-------|-----------|------|
| 最小开销 | ~240 bytes | ~40 bytes | **~200 bytes** |
| 主要差异源 | 空 Map | 无 Map | **~200 bytes** |
| 节省比例 | 100% | ~17% | **~83%** |

## 4. 量化收益场景

### 场景 1: 表格列配置 (100 列)
```
KTRef:    100 × 240 bytes = 24 KB
PseudoRef: 100 × 40 bytes = 4 KB
节省:     20 KB (83%)
```

### 场景 2: Select 选项列表 (1000 项)
```
KTRef:    1000 × 240 bytes = 240 KB
PseudoRef: 1000 × 40 bytes = 40 KB
节省:     200 KB (83%)
```

### 场景 3: 大数据表格 (10000 行 × 5 响应式列)
```
KTRef:    50000 × 240 bytes = 12 MB
PseudoRef: 50000 × 40 bytes = 2 MB
节省:     10 MB (83%)
```

## 5. 客观建议

### 使用 PseudoRef 的场景
- ✅ 大量静态配置值 (100+ 个实例)
- ✅ API 返回的数据包装为"响应式"兼容
- ✅ 永远不需要变更通知的值
- ✅ 表格列定义、选项列表等

### 不应使用 PseudoRef 的场景
- ❌ 需要监听值变化
- ❌ 需要 computed/watch 等响应式特性
- ❌ 值会被修改并触发 UI 更新
- ❌ 少量实例 (<10 个)

## 6. 潜在风险

1. **类型安全**: PseudoRef 实现了 `KTReactiveLike<T>` 接口，类型上是兼容的
2. **运行时行为**: 调用 `addOnChange` 不会报错但也不会生效，可能导致难以排查的 bug
3. **误用风险**: 如果后续有人给 PseudoRef 包装的值添加监听，不会生效

## 7. 总结

**PseudoRef 每个实例大约节省 200 bytes 内存**，主要来自省略了空的 `_changeHandlers` Map。

对于少量实例，节省可以忽略不计。但对于大规模场景（100+ 个静态值），节省是显著的。

权衡点：
- 内存节省 vs 功能完整性
- 如果值确实不需要响应式，PseudoRef 是合理的优化
- 但要明确标注其限制，避免误用
