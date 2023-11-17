import path from "path";
import express from "express";
import routerMain from "./router-main";
import routerApi from "./router-api";
import userController from "./controllers/userController";
import manifest from "../manifest.json";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.locals.manifest = manifest;
  res.locals.scripts = ["main", "vendors"];
  next();
});

app.set("views", "./server/src/views");
app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "../public")));

app.use("/", routerMain);
app.use("/api", routerApi);
app.get("/admin", userController.dashboard);

export default app;
