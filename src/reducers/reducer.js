function todoReducer(state = [], action) {
  if (action.type === "ADD_TODO") {
    const todoText = action.payload.todoText;
    return [
      ...state,
      {
        text: todoText,
        isFinished: false,
        id: !state.length ? 1 : state[state.length - 1].id + 1,
      },
    ];
  } else if (action.type === "DELETE_TODO") {
    const todo = action.payload.todo;
    if (!todo) return state;
    return state.filter((element) => element.id !== todo.id);
  } else if (action.type === "EDIT_TODO") {
    const { todo, todoText } = action.payload;
    if (!todo) return state;
    return state.map((el) => {
      if (todo.id === el.id) el.text = todoText;
      return el;
    });
  }
  return state;
}

export default todoReducer;
