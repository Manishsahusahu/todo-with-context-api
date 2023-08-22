import React from "react";
import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <input type="checkbox" />
      {todo.text}
      <button
        onClick={() =>
          dispatch({ type: "DELETE_TODO", payload: { todo: todo } })
        }
      >
        Delete
      </button>
      <button>Edit</button>
    </div>
  );
};

export default Todo;
