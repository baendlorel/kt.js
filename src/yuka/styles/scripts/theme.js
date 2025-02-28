var colors = {
  $primary: '#3876c6',
  $secondary: '#6c757d',
  $success: '#198754',
  $info: '#0dcaf0',
  $warning: '#ffc107',
  $danger: '#dc3545',
  $light: '#f8f9fa',
  $dark: '#212529',
  $ao: '#0d6efd',
  $sass: '#c71585',
  $yuka: '#a83eff',
};
var t = [];
for (const k in colors) {
  t.push(`${k}: map.get(theme.$colors, ${k.replace('$', '')})`);
}
for (const k in colors) {
  t.push(`${k}-light: light(${k})`);
}
for (const k in colors) {
  t.push(`${k}-lighter: lighter(${k})`);
}
console.log(t.join('\n'));
