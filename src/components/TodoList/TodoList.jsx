import React, { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";

const TodoList = () => {
  const { list } = useContext(TodoContext);
  return (
    <div>
      {list.length
        ? list.map((item) => {
            return <Todo key={item.id} todoData={item.text} />;
          })
        : "No item to show"}
    </div>
  );
};

export default TodoList;
