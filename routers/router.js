import { Router } from "express";
import { getAllMessages, getMessage, postMessage } from "../db/queries.js";

const router = Router();

router.get("/", async (req, res) => {
  const messages = await getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.render("message", {
    message: await getMessage(id),
  });
});

router.post("/new", async (req, res) => {
  const { messageText, messageName } = req.body;
  await postMessage({name: messageName, text: messageText});
  res.redirect("/");
});

export default router;
