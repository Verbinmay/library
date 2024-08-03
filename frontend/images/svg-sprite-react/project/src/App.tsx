import "./App.css";
import { Button } from "./Button/Button";

function App() {
  return (
    <div className="App">
      <Button
        iconId="airplane"
        style={{ backgroundColor: "rgb(229,167,247)" }}
      />
      <Button iconId="smile" style={{ backgroundColor: "rgb(84, 159, 251)" }} />
      <Button iconId="lamp" style={{ backgroundColor: "rgb(230, 251, 93)" }} />
    </div>
  );
}

export default App;
