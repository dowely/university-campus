import { defineComponent } from "vue";
import LabeledInput from "./LabeledInput";

const html = String.raw;

export default defineComponent({
  name: "FormElement",
  components: {
    LabeledInput,
  },
  props: {
    formMode: String,
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
            label-text="Remember me"
            input-type="checkbox"
            :remember-me="true"></labeled-input>
        </div>
        <input
          :class="['form-element__options__forget-input', {'form-element__options__forget-input--login': formMode === 'login'}]"
          name="forget"
          value="Forgot password"
          type="submit" />
      </div>
      <input
        :class="['form-element__login-input', {'form-element__login-input--login': formMode === 'login'}]"
        :name="formMode === 'login' ? 'login' : 'signup'"
        :value="formMode === 'login' ? 'Log in' : 'Sign up'"
        type="submit" />
    </form>
  `,
});
