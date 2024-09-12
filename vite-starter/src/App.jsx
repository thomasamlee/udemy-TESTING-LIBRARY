import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button
        className={state ? "blue" : "red"}
        disabled={disabled}
        onClick={() => setState((prev) => !prev)}
      >
        Change to {state ? "red" : "blue"}
      </button>
      <div>
        <input
          type="checkbox"
          checked={disabled}
          onChange={() => setDisabled((prev) => !prev)}
        />
        <label>{disabled ? "enable" : "disable"} button</label>
      </div>
    </div>
  );
}

export default App;
