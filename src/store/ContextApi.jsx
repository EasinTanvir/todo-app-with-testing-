import React, { createContext, useContext, useState } from "react";

const ContextApi = createContext();

export const ContextWrapper = ({ children, value = [] }) => {
  const [todoList, setTodoList] = useState(value);

  return (
    <ContextApi.Provider value={{ todoList, setTodoList }}>
      {children}
    </ContextApi.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(ContextApi);

  return context;
};
