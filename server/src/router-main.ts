import express from "express";
import userController from "./controllers/userController";

const router = express.Router();

router.get("/", userController.home);

export default router;
