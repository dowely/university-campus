import express from "express";
import { db } from "./app";

const app = express();

app.get("/", async (req, res) => {
  let users = await db?.collection("users").find().toArray();
  res.json(users);
});

export default app;
