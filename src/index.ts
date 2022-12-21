import { defineCustomElement } from "vue";
import SearchBar from "./SearchBar.vue";

const SearchBarElement = defineCustomElement(SearchBar);

export const defineSearchBar = () =>
  customElements.define("search-bar", SearchBarElement);
