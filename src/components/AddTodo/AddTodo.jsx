import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../slices/todoSlice";

const AddTodo = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the content"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={() => dispatch(addTodo({ todoText: inputText }))}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
