import { createApp } from "vue";
import { useMainStore } from "../../store";

export const createSiteHeader = () => {
  return createApp({
    setup() {
      const mainStore = useMainStore();

      return { mainStore };
    },
  });
};
