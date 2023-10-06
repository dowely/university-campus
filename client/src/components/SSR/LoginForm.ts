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
      <div class="login-form">
        <button class="login-form__login-button">Log in</button>
        <button class="login-form__signup-button">Sign up</button>
        <div class="login-form__wrapper">
          <h3 class="login-form__title">Log in</h3>
          <form @submit.prevent="handleClick">
            <div class="login-form__name">
              <label for="login-form-name-field"
                     class="login-form__name-label">Name</label>
              <input id="login-form-name-field"
                     class="login-form__name-input"
                     type="text">
            </div>
            <div class="login-form__email">
              <label for="login-form-email-field"
                     class="login-form__email-label">Email</label>
              <input id="login-form-email-field"
                     class="login-form__email-input"
                     type="email">
            </div>
            <div class="login-form__password">
              <label for="login-form-password-field"
                     class="login-form__password-label">Password</label>
              <input id="login-form-password-field"
                     class="login-form__password-input"
                     type="password">
            </div>
            <div class="login-form__options">
              <label for="login-form-remember-field"
                     class="login-form__remember-label">Remember me {{ count }}</label>
              <input id="login-form-remember-field"
                     class="login-form__remember-input"
                     type="checkbox">
              <input class="login-form__forget-input"
                     name="forget"
                     value="Forgot password"
                     type="submit">
            </div>
            <input class="login-form__login-input"
                   name="login"
                   value="Log in"
                   type="submit">
          </form>
          <div class="login-form__footer">
            <span class="login-form__footer-text">Don't have an account?</span>
            <button class="login-form__footer-switch">Sing up</button>
          </div>
        </div>
      </div>
      `,
  });
}
