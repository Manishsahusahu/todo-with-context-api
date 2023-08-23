import React, { useContext } from "react";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const list = useSelector((state) => {
    console.log(state);
    return state.todo.todoList;
  });
  console.log(list);
  return (
    <div>
      {list.length
        ? list.map((item) => {
            return <Todo key={item.id} todo={item} />;
          })
        : "No item to show"}
    </div>
  );
};

export default TodoList;
