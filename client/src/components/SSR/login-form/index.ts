import { defineComponent } from "vue";
import FormElement from "./FormElement";

const html = String.raw;

export default defineComponent({
  name: "LoginForm",
  components: {
    FormElement,
  },
  template: html/*html*/ `
    <div class="login-form">
      <button class="login-form__login-button">Login</button>
      <button class="login-form__signup-button">Sign up</button>
      <div class="login-form__wrapper">
        <h3 class="login-form__title">Log in</h3>
        <div class="login-form__form-element">
          <form-element></form-element>
        </div>
        <div class="login-form__footer">
          <span class="login-form__footer-text">Don't have an account?</span>
          <button class="login-form__footer-switch">Sing up</button>
        </div>
      </div>
    </div>
  `,
});
