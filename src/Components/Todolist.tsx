import { Todo } from "../model";
import "./Todolist.css";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Todolist: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return <div className="todos"></div>;
};

export default Todolist;
