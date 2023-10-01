import "./styles/index.scss";
import { createLoginForm } from "./components/SSR/LoginForm";

const loginForm = createLoginForm();

loginForm.mount("#login-form");

console.log("I am client javascript");
