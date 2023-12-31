import express from "express";
import userController from "./controllers/userController";

const router = express.Router();

router.get("/users", userController.apiMustBeLoggedIn, userController.users);

export default router;
