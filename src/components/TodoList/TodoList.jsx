import React, { useContext } from "react";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const list = useSelector((state) => state.todo);
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
