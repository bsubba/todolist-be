import { Document } from "mongoose";

export interface TodoItem extends Document {
  readonly title: string;
  readonly description?: string;
  readonly done: boolean;
  readonly cost?: number;
  readonly subtasks?: TodoItem[];
}

export interface TodoList extends Document {
  readonly title: string;
  readonly owner: string;
  readonly items: TodoItem[];
}
