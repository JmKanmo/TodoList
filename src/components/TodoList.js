import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { UseTodoState } from "../TodoContext";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  const todos = UseTodoState();
  console.log("TodoList동작됨?");
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id}></TodoItem>
      ))}
    </TodoListBlock>
  );
}
export default React.memo(TodoList);
