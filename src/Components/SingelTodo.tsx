import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model";
import "./SingelTodo.css";
interface Props {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingelTodo: React.FC<Props> = ({
  todo,
  todos,
  setTodos,
  index,
}: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const handelDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handelDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handelEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  const isDoneOrnot = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  };
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          className="singel_todo_form"
          onSubmit={(e) => handelEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {edit ? (
            <input
              value={editTodo}
              type="text"
              onChange={(e) => setEditTodo(e.target.value)}
              className="todo_singel_text"
            />
          ) : todo.isDone ? (
            <s className="todo_singel_text">{todo.todo}</s>
          ) : (
            <span className="todo_singel_text">{todo.todo}</span>
          )}

          <div>
            <span className="icon" onClick={() => isDoneOrnot()}>
              <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handelDelete(todo.id)}>
              <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handelDone(todo.id)}>
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingelTodo;
