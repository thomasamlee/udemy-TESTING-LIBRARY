import "./App.css";
import { useState } from "react";

function App() {
  const [isBlue, setIsBlue] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button
        className={isBlue ? "blue" : "red"}
        disabled={disabled}
        onClick={() => setIsBlue((prev) => !prev)}
      >
        Change to {isBlue ? "red" : "blue"}
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
