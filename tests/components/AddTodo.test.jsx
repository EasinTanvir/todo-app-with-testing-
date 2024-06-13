import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import AddTodo from "../../src/components/AddTodo";
import { ContextWrapper } from "../../src/store/ContextApi";
import userEvent from "@testing-library/user-event";
import TodoList from "../../src/components/TodoList";

describe("Add Todo Components", () => {
  it("at initial render dsiplay the input field and a button", () => {
    render(
      <ContextWrapper value={[]}>
        <AddTodo />
      </ContextWrapper>
    );

    //get the inputfield bu using react testing query
    const inputField = screen.getByRole("textbox");
    //get the add todo button
    const addTodoButton = screen.getByRole("button", { name: /add todo/i });

    expect(addTodoButton).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
  });

  it("update text field value when user will start typing", async () => {
    render(
      <ContextWrapper value={[]}>
        <AddTodo />
      </ContextWrapper>
    );

    //set the event to track the user interaction
    const user = userEvent.setup();

    // get the input field
    const inputField = screen.getByRole("textbox");

    //enter some value to the input field
    await user.type(inputField, "easin");

    //expect the value in the input field
    expect(inputField).toHaveValue("easin");
  });

  it("Add new todo after clicking the add todo button", async () => {
    render(
      <ContextWrapper value={[]}>
        <AddTodo />
        <TodoList />
      </ContextWrapper>
    );
    const user = userEvent.setup();

    //input field and
    const inputField = screen.getByRole("textbox");
    //the add todo button
    const addButton = screen.getByRole("button", { name: /Add Todo/i });

    //user type a value to the input field
    await user.type(inputField, "Tanvir");
    // click the button
    await userEvent.click(addButton);

    //reset the input field after adding a new todo
    expect(inputField).toHaveValue("");

    //expect the new value into the document
    expect(screen.queryByText("Tanvir")).toBeInTheDocument();
  });
});
