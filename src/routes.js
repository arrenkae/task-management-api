import express from "express";
import { newTask, updateTaskStatus, deleteTask, getTasks } from "./controllers.js";

export const router = express.Router();

router.get("/", (req, res) => {
  res.send("https://github.com/arrenkae/task-management-api");
});
router.post("/tasks", newTask);
router.put("/tasks/:id", updateTaskStatus);
router.delete("/tasks/:id", deleteTask);
router.get("/tasks", getTasks);
