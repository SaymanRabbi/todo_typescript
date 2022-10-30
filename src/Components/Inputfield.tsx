import "./inputfield.css";
const Inputfield = () => {
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
