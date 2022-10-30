import "./inputfield.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const Inputfield = ({ todo, setTodo }: Props) => {
  return (
    <form className="form">
      <input type="text" placeholder="Enter A task" className="input_box" />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default Inputfield;
