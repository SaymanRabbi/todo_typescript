import "./App.css";
import Inputfield from "./Components/Inputfield";

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">TodoList</span>
      <Inputfield />
    </div>
  );
};

export default App;
