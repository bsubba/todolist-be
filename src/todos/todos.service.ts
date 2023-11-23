import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { TodoItem } from "./interfaces/todos.interface";
import { CreateTodoItemDto } from "./dto/create-todoitem.dto";

@Injectable()
export class TodoItemService {
  constructor(
    @InjectModel("TodoItem") private readonly todoItemModel: Model<TodoItem>,
  ) {}

  // Get all todos
  async getAllTodo(): Promise<TodoItem[]> {
    return this.todoItemModel.find().exec();
  }

  // Get a todo
  async getTodoById(id: string): Promise<TodoItem> {
    const todo = await this.todoItemModel.findById(id).exec();
    return todo;
  }

  // Add a todo
  async createTodo(createTodoItemDto: CreateTodoItemDto): Promise<TodoItem> {
    const newTodo = new this.todoItemModel(createTodoItemDto);
    return newTodo.save();
  }

  // Update a todo
  async updateTodo(
    id: string,
    createTodoItemDto: CreateTodoItemDto,
  ): Promise<TodoItem> {
    const updatedTodo = await this.todoItemModel.findByIdAndUpdate(
      id,
      createTodoItemDto,
      { new: true },
    );
    return updatedTodo;
  }

  // Delete a todo
  async deleteTodo(id: string): Promise<any> {
    const deletedTodo = await this.todoItemModel.findByIdAndRemove(id);
    return deletedTodo;
  }
}
