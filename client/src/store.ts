import { ref } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore("main", () => {
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
});
