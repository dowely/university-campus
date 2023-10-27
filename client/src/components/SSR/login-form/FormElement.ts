import { defineComponent } from "vue";
import LabeledInput from "./LabeledInput";

const html = String.raw;

export default defineComponent({
  name: "FormElement",
  components: {
    LabeledInput,
  },
  setup() {
    const inputs = {
      name: "text",
      email: "email",
      password: "password",
    };

    return { inputs };
  },
  template: html/*html*/ `
    <form
      class="form-element"
      @submit.prevent="handleClick">
      <div class="form-element__labeled-inputs">
        <labeled-input
          v-for="(inputType, labelText) in inputs"
          :label-text="labelText"
          :input-type="inputType"></labeled-input>
      </div>
      <div class="form-element__options">
        <div class="form-element__options__labeled-input">
          <labeled-input
            label-text="remember me"
            input-type="checkbox"></labeled-input>
        </div>
        <input
          class="form-element__options__forget-input"
          name="forget"
          value="Forgot password"
          type="submit" />
      </div>
      <input
        class="form-element__login-input"
        name="login"
        value="Log in"
        type="submit" />
    </form>
  `,
});
