import { Request, Response, NextFunction } from "express";
import { renderToString } from "vue/server-renderer";
import { createLoginForm } from "@university-campus/client/src/components/SSR/LoginForm";
import User from "../models/User";

const home = (req: Request, res: Response) => {
  const loginForm = createLoginForm();

  renderToString(loginForm).then(loginFormHtml => {
    res.locals.loginFormHtml = loginFormHtml;
    res.render("home");
  });
};

const dashboard = (req: Request, res: Response) => {
  res.render("dashboard");
};

/**********   API functions begin   **********/

const apiMustBeLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  next();
};

const users = async (req: Request, res: Response) => {
  let users = await User.getAllUsers();
  res.json(users);
};

export default { home, dashboard, apiMustBeLoggedIn, users };
