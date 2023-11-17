import { Request, Response, NextFunction } from "express";
import { renderToString } from "vue/server-renderer";
import { createSiteHeader } from "@university-campus/client/src/components/SSR/site-header";
import User from "../models/User";

const dashboard = (req: Request, res: Response) => {
  res.render("dashboard");
};

const home = (req: Request, res: Response) => {
  const siteHeader = createSiteHeader();

  renderToString(siteHeader).then(siteHeaderHtml => {
    res.locals.siteHeaderHtml = siteHeaderHtml;
    res.render("home");
  });
};

const login = (req: Request, res: Response) => {
  const user = new User(req.body);

  user.login();
};

const signup = (req: Request, res: Response) => {
  const user = new User(req.body);

  user.signup();
};

/**********   API functions begin   **********/

const apiMustBeLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  next();
};

const users = async (req: Request, res: Response) => {
  let users = await User.getAllUsers();
  res.json(users);
};

export default { dashboard, home, login, signup, apiMustBeLoggedIn, users };
