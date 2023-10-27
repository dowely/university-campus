import { defineComponent } from "vue";

const html = String.raw;

export default defineComponent({
  name: "LabeledInput",
  props: {
    labelText: String,
    inputType: String,
  },
  template: html/*html*/ `
    <div class="labeled-input">
      <label :for="labelText.replace(' ', '-') + '-input-field'">{{labelText}}</label>
      <input
        :id="labelText.replace(' ', '-') + '-input-field'"
        :type="inputType" />
    </div>
  `,
});
