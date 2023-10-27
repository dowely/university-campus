import { defineComponent } from "vue";

const html = String.raw;

export default defineComponent({
  name: "MenuLinks",
  props: {
    isMobileMenuOpen: Boolean,
  },
  template: html/*html*/ `
    <ul :class="['menu-links', {active: isMobileMenuOpen}]">
      <li><a href="#">About Us</a></li>
      <li><a href="#">Programs</a></li>
      <li><a href="#">Events</a></li>
      <li><a href="#">Professors</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
  `,
});
