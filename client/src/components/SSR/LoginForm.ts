import { createSSRApp } from "vue";

export function createLoginForm() {
  return createSSRApp({
    data: () => ({ count: 2 }),
    template: /*html*/ `
    <button @click="count++">{{ count }}</button>
    `,
  });
}
