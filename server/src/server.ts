import path from "path";
import express from "express";
import routerMain from "./router-main";
import routerApi from "./router-api";
import userController from "./controllers/userController";

const app = express();

app.set("views", "./server/src/views");
app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname, "../public")));

app.use("/", routerMain);
app.use("/api", routerApi);
app.get("/admin", userController.dashboard);

export default app;
