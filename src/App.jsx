import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="flex  justify-center items-center min-h-screen bg-slate-900">
      <div className="w-[570px] border shadow-sm shadow-gray-100 px-8 rounded-md py-10 space-y-6">
        <div>
          <h1 className="text-center uppercase text-white font-bold text-2xl">
            Todo Application
          </h1>
          <hr className="mt-1" />
        </div>

        <div>
          <AddTodo />
        </div>
        <div>
          <hr />
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
