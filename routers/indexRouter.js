import { Router } from "express";

let currId = 3;

const messages = [
  {
    id: 1,
    text: "Rawr!",
    user: "Hippo",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello there",
    user: "Cat",
    added: new Date(),
  },
];

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.render("message", {
    message: messages.find((message) => message.id === Number(id)),
  });
});

indexRouter.post("/new", (req, res) => {
  console.log("POST!");
  const form = req.body;
  messages.push({
    id: currId++,
    text: form.messageText,
    user: form.messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

export default indexRouter;
