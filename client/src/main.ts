import { createSiteHeader } from "./components/SSR/site-header";

(function (r) {
  r.keys().forEach(r);
})(require.context("./assets/", true, /\.(png|jpeg|jpg|gif|svg)$/));

const siteHeader = createSiteHeader();

siteHeader.mount("#site-header");
