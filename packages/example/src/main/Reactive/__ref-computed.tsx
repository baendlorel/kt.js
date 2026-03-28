// @ts-nocheck
const salary: KTRef<number> = ref(0);
const tax: KTComputed<number> = computed(() => salary.value * 0.06);
const element = (
  <div>
    <p>salary: {salary}</p>
    <p>tax: {tax}</p>
  </div>
);
