import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../../slices/todoSlice";

const Todo = ({ todo }) => {
  const [editEnable, setEditEnable] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const dispatch= useDispatch()

  const handleEdit = () => {
    if (editEnable) {
      dispatch(editTodo({todoId: todo.id, todoText:editText}))
    }
    setEditEnable(!editEnable);
  };
  const handleChange = (e) => {
    setEditText(e.target.value);
  };

  return (
    <div>
      <input type="checkbox" />
      {!editEnable ? (
        todo.text
      ) : (
        <input type="text" value={editText} onChange={handleChange} />
      )}
      <button onClick={() => dispatch(deleteTodo({ todoId: todo.id }))}>
        Delete
      </button>
      <button onClick={handleEdit}>{editEnable ? "Save" : "Edit"}</button>
    </div>
  );
};

export default Todo;
