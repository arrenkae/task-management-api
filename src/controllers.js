import { _newTask, _updateTaskStatus, _deleteTask, _getTasks, _getTasksByStatus } from "./models.js";

// Could also be handled with isCompleted boooleans but this leaves an option to add more statuses
const statusOptions = ["in progress", "completed"];

export const newTask = async (req, res) => {
  try {
    const { text, status } = req.body;
    if (!text || !status) {
      return res.status(400).send("Text and status required");
    }
    if (!statusOptions.includes(status)) {
      return res.status(400).send("Invalid status");
    }
    const id = _newTask(text, status).lastInsertRowid;
    return res.status(201).json({ id, msg: "Task added successfully" });
  } catch (error) {
    return res.status(500).send("Unable to add task");
  }
};

export const updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      return res.status(400).send("Status required");
    }
    if (!statusOptions.includes(status)) {
      return res.status(400).send("Invalid status");
    }
    const update = _updateTaskStatus(id, status);
    if (update.changes == 0) {
      return res.status(204).send("No such task");
    } else {
      return res.status(200).send("Task updated successfully");
    }
  } catch (error) {
    return res.status(500).send("Unable to update task");
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const del = _deleteTask(id);
    if (del.changes == 0) {
      return res.status(204).send("No such task");
    } else {
      return res.status(200).send("Task deleted successfully");
    }
  } catch (error) {
    return res.status(500).send("Unable to delete task");
  }
};

export const getTasks = async (req, res) => {
  try {
    const status = req.query.status;
    if (status) {
      const tasks = _getTasksByStatus(status);
      return res.status(200).json(tasks);
    } else {
      const tasks = _getTasks();
      return res.status(200).json(tasks);
    }
  } catch (error) {
    return res.status(500).send("Unable to get tasks");
  }
};
