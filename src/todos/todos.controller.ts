import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  // UseGuards,
} from "@nestjs/common";
import { TodoItemService } from "./todos.service";
import { CreateTodoItemDto } from "./dto/create-todoitem.dto";
import { TodoItem } from "./interfaces/todos.interface";

@Controller("todo")
export class TodoItemController {
  constructor(private readonly todoService: TodoItemService) {}

  //add a todo
  @Post()
  // @UseGuards(AuthGuard('jwt'))
  async addTodo(@Body() createTodoDTO: CreateTodoItemDto) {
    return this.todoService.createTodo(createTodoDTO);
  }

  //get all todos
  @Get()
  async getAllTodos(): Promise<TodoItem[]> {
    return this.todoService.getAllTodo();
  }

  //get a todo
  @Get(":id")
  async getTodoById(@Param("id") id): Promise<TodoItem> {
    return this.todoService.getTodoById(id);
  }

  // update a todo
  @Put(":id")
  // @UseGuards(AuthGuard("jwt"))
  async updateTodo(
    @Param("id") id,
    @Body() createTodoItemDto: CreateTodoItemDto,
  ): Promise<TodoItem> {
    return this.todoService.updateTodo(id, createTodoItemDto);
  }

  // delete a todo protected with JWT strategy
  @Delete(":id")
  // @UseGuards(AuthGuard("jwt"))
  async deleteTodo(@Param("id") id): Promise<TodoItem> {
    return this.todoService.deleteTodo(id);
  }
}
