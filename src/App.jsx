import { useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoContext from "./context/TodoContext";
import todoReducer from "./reducers/reducer";
import store from "./store/store";

function App() {
  // const [list, dispatch] = useReducer(todoReducer, []); without redux
  const {getState, dispatch} = store;

  return (
    <Provider value={{ getState, dispatch }}>
      <AddTodo />
      <TodoList />
    </Provider>
  );
}

export default App;
