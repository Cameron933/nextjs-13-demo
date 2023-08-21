import { Todo } from "@/typings";
import React from "react";

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicod.com/todos/${todoId}`
  );

  const todo: Todo = await res.json();
  return todo;
};

const TodoPage = async ({ params: { todoId } }: PageProps) => {
  const todo: Todo = await fetchTodo(todoId);

  return <div>TodoPage: {todoId}</div>;
};

export default TodoPage;
