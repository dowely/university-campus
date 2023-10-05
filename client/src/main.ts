import { createPinia } from "pinia";
import { createSiteHeader } from "./components/SSR/SiteHeader";
import { createLoginForm } from "./components/SSR/LoginForm";

(function (r) {
  r.keys().forEach(r);
})(require.context("./assets/", true, /\.(png|jpeg|jpg|gif|svg)$/));

const pinia = createPinia();
const siteHeader = createSiteHeader();
const loginForm = createLoginForm();

siteHeader.use(pinia);
loginForm.use(pinia);

siteHeader.mount("#site-header");
loginForm.mount("#login-form");
