import React, { useState } from "react";
import "./App.css";
import Inputfield from "./Components/Inputfield";
import Todolist from "./Components/Todolist";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handelAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  return (
    <div className="App">
      <span className="heading">TodoList</span>
      <Inputfield todo={todo} setTodo={setTodo} handelAdd={handelAdd} />
      <Todolist todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
