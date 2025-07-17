import express from "express";
import { router } from "./routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Running on ${process.env.PORT || 3000}`);
});

app.use("/", router);
