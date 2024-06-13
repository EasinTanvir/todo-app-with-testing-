import React from "react";
import toast from "react-hot-toast";
import { useTodoContext } from "../store/ContextApi";

const DeleteTodo = ({ id }) => {
  const { todoList, setTodoList } = useTodoContext();
  const onDeleteHandler = () => {
    const updatedItem = todoList.filter((item) => item.id !== id);
    setTodoList(updatedItem);
    toast.success("Todo Deleted");
  };
  return (
    <button
      onClick={onDeleteHandler}
      className="bg-rose-800 text-white px-3 py-1 rounded-md"
    >
      Delete
    </button>
  );
};

export default DeleteTodo;
