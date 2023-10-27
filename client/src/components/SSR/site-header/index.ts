import { createSSRApp, ref } from "vue";
import MenuToggle from "./MenuToggle";
import MenuLinks from "./MenuLinks";
import SearchForm from "./SearchForm";
import LoginForm from "../login-form";

const html = String.raw;

export const createSiteHeader = () => {
  return createSSRApp({
    components: {
      MenuToggle,
      MenuLinks,
      SearchForm,
      LoginForm,
    },
    setup() {
      const isMobileMenuOpen = ref(false);
      const isSearchInputOpen = ref(false);

      function toggleMobileMenu() {
        if (isSearchInputOpen.value) isSearchInputOpen.value = false;
        isMobileMenuOpen.value = !isMobileMenuOpen.value;
      }

      function toggleSearchInput() {
        if (isMobileMenuOpen.value) isMobileMenuOpen.value = false;
        isSearchInputOpen.value = !isSearchInputOpen.value;
      }

      return { isMobileMenuOpen, isSearchInputOpen, toggleMobileMenu, toggleSearchInput };
    },
    template: html/*html*/ `
      <header class="site-header">
        <div class="site-header__menu-toggle">
          <menu-toggle
            :is-mobile-menu-open="isMobileMenuOpen"
            @toggle-mobile-menu="toggleMobileMenu"></menu-toggle>
        </div>
        <h1 class="site-header__logo-text">
          <a href="#">University <strong>Campus</strong></a>
        </h1>
        <nav class="site-header__menu-links">
          <menu-links :is-mobile-menu-open="isMobileMenuOpen"></menu-links>
        </nav>
        <div class="site-header__menu-forms">
          <div class="site-header__menu-forms__search">
            <search-form
              :is-search-input-open="isSearchInputOpen"
              @toggle-search-input="toggleSearchInput"></search-form>
          </div>
          <div class="site-header__menu-forms__login">
            <login-form></login-form>
          </div>
        </div>
      </header>
    `,
  });
};
