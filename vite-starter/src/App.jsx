import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState(false);

  const className = state ? "blue" : "red";
  const text = state ? "Change to red" : "Change to blue";

  return (
    <div>
      <button className={className} onClick={() => setState((prev) => !prev)}>
        {text}
      </button>
    </div>
  );
}

export default App;
