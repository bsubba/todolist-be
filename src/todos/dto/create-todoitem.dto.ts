import { TodoItem } from "src/todos/interfaces/todos.interface";

export class CreateTodoItemDto {
  readonly title: string;
  readonly description?: string;
  readonly done: boolean;
  readonly cost?: number;
  readonly subtasks?: TodoItem[];
}
