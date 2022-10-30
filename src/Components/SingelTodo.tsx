import { Todo } from "../model";
import "./SingelTodo.css";
interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingelTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return <div></div>;
};

export default SingelTodo;
