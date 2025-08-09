import express from "express";
import path from "path";
import indexRouter from "./routers/indexRouter.js";
const PORT = 3000;
const __dirname = import.meta.dirname;

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Server running at localhost:${PORT}`);
});
