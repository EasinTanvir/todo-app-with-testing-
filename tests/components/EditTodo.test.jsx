import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import EditTodo from "../../src/components/EditTodo";
import { ContextWrapper } from "../../src/store/ContextApi";
import userEvent from "@testing-library/user-event";
import TodoList from "../../src/components/TodoList";

describe("Edit Todo Components", () => {
  it("should render a paragraph with 'invalid data' if title or id is not passed throush props", () => {
    render(
      <ContextWrapper>
        <EditTodo />
      </ContextWrapper>
    );

    //show the paragraph text when props are not passed
    const showTitle = screen.getByText(/title and id required/i);
    expect(showTitle).toBeInTheDocument();
  });

  it("should render a input field and button if title and id is passes as props", () => {
    render(
      <ContextWrapper>
        <EditTodo title="Easin" id={2} />
      </ContextWrapper>
    );

    const inputFiled = screen.getByRole("textbox");
    expect(inputFiled).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("change the value of input field when start typing", async () => {
    render(
      <ContextWrapper>
        <EditTodo title="Test" id={12} />
      </ContextWrapper>
    );

    //set the events
    const user = userEvent.setup();

    const inputField = screen.getByRole("textbox");

    //clear the input field to avoid conflict with the default value
    await user.clear(inputField);
    //add new value to the input field
    await user.type(inputField, "Hello");

    expect(inputField).toHaveValue("Hello");
  });

  it("updates the state when update button is clicked", async () => {
    const todoList = [
      { id: 1, title: "Easin", editable: false },
      { id: 2, title: "Jack", editable: false },
    ];

    render(
      <ContextWrapper value={todoList}>
        <EditTodo title="Easin" id={1} />
        <TodoList />
      </ContextWrapper>
    );

    const inputField = screen.getByRole("textbox");
    const updateButton = screen.getByRole("button", { name: /update/i });

    await userEvent.type(inputField, "Tanvir");
    await userEvent.click(updateButton);

    expect(inputField).toHaveValue("");

    //Easin was the title passed to the EditTodo component as props and Tanvir is the value that added later to update. So, now EasinTanvir is the updated value
    expect(screen.queryByText(/EasinTanvir/i)).toBeInTheDocument();
  });
});
