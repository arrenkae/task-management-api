import Database from "better-sqlite3";
const db = new Database("tasks-management.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT NOT NULL,
      status TEXT NOT NULL
    );
`);

export const _newTask = (text, status) => {
  const sql = "INSERT INTO tasks (text, status) VALUES (?, ?)";
  return db.prepare(sql).run(text, status);
};

export const _updateTaskStatus = (id, status) => {
  const sql = "UPDATE tasks SET status = ? WHERE id = ?";
  return db.prepare(sql).run(status, id);
};

export const _deleteTask = (id) => {
  const sql = "DELETE FROM tasks WHERE id = ?";
  return db.prepare(sql).run(id);
};

export const _getTasks = () => {
  const sql = "SELECT * FROM tasks";
  return db.prepare(sql).all();
};

export const _getTasksByStatus = (status) => {
  const sql = "SELECT * FROM tasks WHERE status = ?";
  return db.prepare(sql).all(status);
};
