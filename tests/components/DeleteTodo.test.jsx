import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { ContextWrapper } from "../../src/store/ContextApi";
import DeleteTodo from "../../src/components/DeleteTodo";
import userEvent from "@testing-library/user-event";
import TodoList from "../../src/components/TodoList";

describe("Delete Todo Components", () => {
  it("delete todo items when button is clicked", async () => {
    const todoList = [
      { id: 1, title: "Easin", editable: false },
      { id: 2, title: "Jack", editable: false },
    ];

    render(
      <ContextWrapper value={todoList}>
        <DeleteTodo id={1} />
        <TodoList />
      </ContextWrapper>
    );

    //set up the event
    const user = userEvent.setup();
    //get the first button only
    const deleteButton = screen.getAllByRole("button", { name: "Delete" })[0];

    //click the button to fire event
    await user.click(deleteButton);

    const deletedTitle = screen.queryByText(/easin/i);
    //the title has deleted with the content Easin
    expect(deletedTitle).not.toBeInTheDocument();

    //the title has remained with the content Jack
    const remainedTitle = screen.queryByText(/jack/i);
    expect(remainedTitle).toBeInTheDocument();
  });
});
