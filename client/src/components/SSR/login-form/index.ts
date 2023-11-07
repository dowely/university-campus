import { defineComponent, ref } from "vue";
import FormElement from "./FormElement";

const html = String.raw;

export default defineComponent({
  name: "LoginForm",
  components: {
    FormElement,
  },
  props: {
    isLoginFormOpen: Boolean,
  },
  emits: ["toggle-login-form"],
  setup(props, { emit }) {
    const formMode = ref("login");

    function handleClick(mode: string) {
      if (formMode.value === mode && props.isLoginFormOpen) emit("toggle-login-form");
      formMode.value = mode;
      if (!props.isLoginFormOpen) emit("toggle-login-form");
    }

    function toggleFormMode() {
      formMode.value = formMode.value === "login" ? "signup" : "login";
    }

    return { formMode, handleClick, toggleFormMode };
  },
  template: html/*html*/ `
    <div class="login-form">
      <button
        class="login-form__login-button"
        @click="handleClick('login')">
        Login
      </button>
      <button
        class="login-form__signup-button"
        @click="handleClick('signup')">
        Sign up
      </button>
      <div :class="['login-form__wrapper', {'login-form__wrapper--active': isLoginFormOpen}]">
        <div class="login-form__card">
          <h3 :class="['login-form__title', {'login-form__title--login': formMode === 'login'}]">
            {{formMode === 'login' ? 'Log in' : 'Sign up'}}
          </h3>
          <div class="login-form__form-element">
            <form-element :form-mode="formMode"></form-element>
          </div>
          <div class="login-form__footer">
            <span
              v-if="formMode === 'login'"
              class="login-form__footer-text"
              >Don't have an account?</span
            >
            <span
              v-else
              class="login-form__footer-text"
              >Already have an account?</span
            >
            <button
              :class="['login-form__footer-switch', {'login-form__footer-switch--login': formMode === 'login'}]"
              @click="toggleFormMode">
              {{formMode === 'login' ? 'Sign up' : 'Log in'}}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
});
