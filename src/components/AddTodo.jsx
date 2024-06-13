import React, { useState } from "react";
import { useTodoContext } from "../store/ContextApi";
import toast from "react-hot-toast";

const AddTodo = () => {
  const { todoList, setTodoList } = useTodoContext();
  const [text, setText] = useState("");

  const onTodoAddHandler = () => {
    if (!text || text.trim().length === 0) return toast.error("Title required");

    const sendData = {
      id: Math.round(Math.random() * 99999),
      title: text,
      editable: false,
    };

    setTodoList([...todoList, sendData]);
    setText("");
    toast.success("New Todo Added");
  };

  return (
    <div className="flex justify-between gap-2 items-center">
      <input
        type="text"
        placeholder="Enter Title"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-white px-2 py-1 rounded-md bg-transparent text-white  flex-1"
      />
      <button
        onClick={onTodoAddHandler}
        className="bg-rose-700 text-white py-1 px-4 rounded-md w-32"
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
