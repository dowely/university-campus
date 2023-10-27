import { defineComponent } from "vue";

const html = String.raw;

export default defineComponent({
  name: "SearchForm",
  props: {
    isSearchInputOpen: Boolean,
  },
  setup(props, { emit }) {
    function handleClick() {
      emit("toggle-search-input");
    }
    return { handleClick };
  },
  template: html/*html*/ `
    <form
      action="/search"
      method="GET"
      class="search-form">
      <div
        :class="['search-form__input-wrapper', {'search-form__input-wrapper--active': isSearchInputOpen}]">
        <label for="site-search-field">Search on this site...</label>
        <input
          type="search"
          id="site-search-field"
          name="searchPhrase"
          aria-label="Search through site content"
          placeholder="Search on this site..."
          required />
      </div>
      <button @click.prevent="handleClick">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  `,
});
