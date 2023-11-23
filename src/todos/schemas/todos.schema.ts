import mongoose from "mongoose";

export const TodoItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  done: { type: Boolean, default: false },
  subtasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "TodoItem" }],
  cost: { type: Number },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: "TodoItem" },
});

export const TodoListSchema = new mongoose.Schema({
  title: { type: String, required: true },
  owner: { type: String, required: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "TodoItem" }],
});
