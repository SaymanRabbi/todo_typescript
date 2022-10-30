import "./inputfield.css";
const Inputfield = () => {
  return (
    <form className="form">
      <input type="text" placeholder="Enter A task" className="input_box" />
      <button>Go</button>
    </form>
  );
};

export default Inputfield;
