import { createLoginForm } from "./components/SSR/LoginForm";

declare global {
  interface NodeRequire {
    context: (arg0: string, arg1: boolean, arg2: RegExp) => any;
  }
}

(function (r) {
  r.keys().forEach(r);
})(require.context("./assets/", true, /\.(png|jpeg|jpg|gif|svg)$/));

const loginForm = createLoginForm();

loginForm.mount("#login-form");

console.log("I am client javascript");
