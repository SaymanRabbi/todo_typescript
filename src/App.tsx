import { useState } from "react";
import "./App.css";
import Inputfield from "./Components/Inputfield";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div className="App">
      <span className="heading">TodoList</span>
      <Inputfield todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
