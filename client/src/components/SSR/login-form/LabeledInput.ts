import { defineComponent, ref, watch } from "vue";

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
    formMode: String,
  },
  setup(props) {
    const focused = ref(false);
    const input = ref("");

    function handleFocus() {
      focused.value = true;
    }

    function handleBlur() {
      focused.value = false;
    }

    watch(
      () => props.formMode,
      () => (input.value = "")
    );

    return { focused, input, handleFocus, handleBlur };
  },
  template: html/*html*/ `
    <div class="labeled-input">
      <label
        :class="{'remember-me': rememberMe, focused: focused || input.value?.length !== 0}"
        :for="labelText.replace(' ', '-') + '-input-field'"
        >{{labelText}}</label
      >
      <input
        :class="{'remember-me': rememberMe}"
        :id="labelText.replace(' ', '-') + '-input-field'"
        :type="inputType"
        ref="input"
        v-model="input.value"
        @focus="handleFocus"
        @blur="handleBlur" />
    </div>
  `,
});
