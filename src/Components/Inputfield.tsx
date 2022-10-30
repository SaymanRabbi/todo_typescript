import { useRef } from "react";
import "./inputfield.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handelAdd: (e: React.FormEvent) => void;
}
const Inputfield = ({ todo, setTodo, handelAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="form"
      onSubmit={(e) => {
        handelAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="Enter A task"
        ref={inputRef}
        className="input_box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default Inputfield;
