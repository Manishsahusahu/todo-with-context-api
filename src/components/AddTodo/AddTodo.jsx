import React, { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

const AddTodo = () => {
  const [inputText, setInputText] = useState("");
  const {dispatch} = useContext(TodoContext);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the content"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch({ type: "ADD_TODO", payload: { todoText: inputText } })
        }
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
