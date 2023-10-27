import { defineComponent } from "vue";

const html = String.raw;

export default defineComponent({
  name: "MenuToggle",
  props: {
    isMobileMenuOpen: Boolean,
  },
  emits: ["toggle-mobile-menu"],
  setup(props, { emit }) {
    function handleClick() {
      emit("toggle-mobile-menu");
    }

    return { handleClick };
  },
  template: html/*html*/ `
    <div
      :class="['menu-toggle', {'menu-toggle--active': isMobileMenuOpen}]"
      @click="handleClick">
      <span class="menu-toggle__bar menu-toggle__bar--top"></span>
      <span class="menu-toggle__bar"></span>
      <span class="menu-toggle__bar menu-toggle__bar--bottom"></span>
    </div>
  `,
});
