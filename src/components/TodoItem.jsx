import React from "react";
import { useTodoContext } from "../store/ContextApi";
import EditTodo from "./EditTodo";
import toast from "react-hot-toast";
import DeleteTodo from "./DeleteTodo";

const TodoItem = ({ title, id, editable }) => {
  const { todoList, setTodoList } = useTodoContext();

  const onEditeHandler = (id) => {
    const makeEditable = todoList.map((item) =>
      item.id === id ? { ...item, editable: true } : item
    );

    setTodoList(makeEditable);
  };

  return (
    <>
      {editable ? (
        <EditTodo title={title} id={id} editable={editable} />
      ) : (
        <>
          <div className="flex justify-between">
            <h3 className="text-xl text-white ">{title}</h3>
            <div className="flex gap-2 items-center">
              <button
                onClick={() => onEditeHandler(id)}
                className="bg-teal-900 text-white px-3 py-1 rounded-md"
              >
                Edit
              </button>
              <DeleteTodo id={id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TodoItem;
