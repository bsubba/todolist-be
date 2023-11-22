import { Body, Controller, Get, Param, Post } from "@nestjs/common";

@Controller("todos")
export class TodosController {
  @Get()
  getAll() {
    return "this is get all controller";
  }

  @Get(":id")
  getOne(@Param("id") id: string) {
    return `this is ${id} call`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
