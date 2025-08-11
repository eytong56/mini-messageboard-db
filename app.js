import express from "express";
import path from "path";
import "dotenv/config";
import router from "./routers/router.js";
const __dirname = import.meta.dirname;
const PORT = process.env.PORT || 3000;

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running at localhost:${PORT}`);
});
