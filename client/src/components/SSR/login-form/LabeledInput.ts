import { defineComponent } from "vue";

const html = String.raw;

export default defineComponent({
  name: "LabeledInput",
  props: {
    labelText: String,
    inputType: String,
    rememberMe: {
      type: Boolean,
      required: false,
    },
  },
  template: html/*html*/ `
    <div class="labeled-input">
      <label
        :class="{'remember-me': rememberMe}"
        :for="labelText.replace(' ', '-') + '-input-field'"
        >{{labelText}}</label
      >
      <input
        :class="{'remember-me': rememberMe}"
        :id="labelText.replace(' ', '-') + '-input-field'"
        :type="inputType" />
    </div>
  `,
});
