import React from "react";

const Todo = ({ todoData }) => {
  return (
    <div>
      <input type="checkbox" />
      {todoData}
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
};

export default Todo;
