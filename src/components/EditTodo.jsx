import React, { useState } from "react";
import { useTodoContext } from "../store/ContextApi";
import toast from "react-hot-toast";

const EditTodo = ({ title, id, editable }) => {
  const { todoList, setTodoList } = useTodoContext();

  const [text, setText] = useState(title);

  const onUpdateTodoAddHandler = () => {
    const updateTodo = todoList.map((item) =>
      item.id === id ? { ...item, title: text, editable: false } : item
    );
    setTodoList(updateTodo);

    setText("");
    toast.success("Todo Updated");
  };

  if (!title || !id) {
    return <p>Title and id required</p>;
  }

  return (
    <div className="flex justify-between gap-2 items-center">
      <input
        type="text"
        name="text"
        id="text"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-white px-2 py-1 rounded-md bg-transparent text-white  flex-1"
      />
      <button
        onClick={onUpdateTodoAddHandler}
        className="bg-green-600 text-white py-1 px-4 rounded-md w-32"
      >
        Update
      </button>
    </div>
  );
};

export default EditTodo;
