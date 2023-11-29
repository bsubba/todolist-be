import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { TodoItemService } from "./todos.service";
import { TodoItemController } from "./todos.controller";
import { TodoItemSchema } from "./schemas/todos.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "TodoItem", schema: TodoItemSchema }]),
  ],
  providers: [TodoItemService],
  controllers: [TodoItemController],
})
export class TodoItemModule {}
