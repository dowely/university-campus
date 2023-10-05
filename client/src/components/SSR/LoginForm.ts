import { createSSRApp, ref } from "vue";

export function createLoginForm() {
  return createSSRApp({
    setup() {
      const count = ref(0);

      function handleClick() {
        count.value++;
      }

      return { count, handleClick };
    },
    template: /*html*/ `
      <button @click="handleClick">{{ count }}</button>
      `,
  });
}
