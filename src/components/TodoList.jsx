import React from "react";
import { useTodoContext } from "../store/ContextApi";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoList } = useTodoContext();
  if (todoList.length === 0) {
    return (
      <h3 className="text-center text-green-600   text-lg font-bold mt-4">
        No Todo added yet
      </h3>
    );
  }
  return (
    <div className="flex flex-col gap-3 mt-2">
      {todoList.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TodoList;
