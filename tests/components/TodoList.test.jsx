import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import TodoList from "../../src/components/TodoList";
import { ContextWrapper } from "../../src/store/ContextApi";

describe("TodoList Components", () => {
  it("it should render a heading with 'No Todo added yet' when no today has added", () => {
    render(
      <ContextWrapper value={[]}>
        <TodoList />
      </ContextWrapper>
    );

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/no todo added/i);
  });

  it("render list of todo when the todolist array is not empty", () => {
    const todoList = [
      { id: 1, title: "Easin", editable: false },
      { id: 2, title: "Jack", editable: false },
    ];

    render(
      <ContextWrapper value={todoList}>
        <TodoList />
      </ContextWrapper>
    );

    todoList.forEach((item) => {
      const title = screen.getByRole("heading", { name: item.title });
      //each title exist in the document
      expect(title).toBeInTheDocument();
      //edit button
      const editButton = screen.getAllByRole("button", { name: /edit/i })[0];
      //delet button
      const deleteButton = screen.getAllByRole("button", {
        name: /delete/i,
      })[0];

      expect(editButton).toBeInTheDocument();
      expect(deleteButton).toBeInTheDocument();
    });
  });

  it("it should render a input field and button when editable is truthy", () => {
    const todoList = [{ id: 1, title: "Easin", editable: true }];

    render(
      <ContextWrapper value={todoList}>
        <TodoList />
      </ContextWrapper>
    );

    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument();

    const updateButton = screen.getByRole("button", { name: /update/i });
    expect(updateButton).toBeInTheDocument();
  });
});
