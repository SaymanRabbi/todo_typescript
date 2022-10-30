import { Todo } from "../model";
import SingelTodo from "./SingelTodo";
import "./Todolist.css";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Todolist: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="Container">
      <div className="todos todosactive_task">
        <span className="todos_heading">Active Task</span>

        {todos.map((todo) => (
          <SingelTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className="todos complete_task">
        <span className="todos_heading">Completed Task</span>

        {todos.map((todo) => (
          <SingelTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default Todolist;
