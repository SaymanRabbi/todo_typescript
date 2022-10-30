import "./inputfield.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handelAdd: (e: React.FormEvent) => void;
}
const Inputfield = ({ todo, setTodo, handelAdd }: Props) => {
  return (
    <form className="form" onSubmit={handelAdd}>
      <input
        type="text"
        placeholder="Enter A task"
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
