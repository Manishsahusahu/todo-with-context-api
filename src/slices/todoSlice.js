import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: function (state, action) {
      const todoText = action.payload.todoText;
      state.todoList.push({
        text: todoText,
        isFinished: false,
        id: !state.todoList.length
          ? 1
          : state.todoList[state.todoList.length - 1].id + 1,
      });
    },
    editTodo: function (state, action) {
      const { todoId, todoText } = action.payload;
      if (todoId)
        state.todoList = state.todoList.map((el) => {
          if (todoId === el.id) el.text = todoText;
          return el;
        });
    },
    deleteTodo: function (state, action) {
      const todoId = action.payload.todoId;
      console.log("todoId for delete", todoId);
      if (todoId)
        state.todoList = state.todoList.filter(
          (element) => element.id !== todoId
        );
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
