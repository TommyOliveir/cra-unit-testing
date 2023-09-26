// import logo from './logo.svg';
import "./App.css";
import { Application } from "./components/application";
import { Skills } from "./components/skills";

function App() {
  return (
    <div className="App">
      <Application />
      <Skills skills={["HTML", "CSS", "JS"]} />
    </div>
  );
}

export default App;
