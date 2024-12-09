import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <MyButton color={"red"} />
      <MyButton color={"green"} />
    </div>
  );
}

function MyButton({ color }) {
  //State
  const [count, setCount] = useState(0);
  // event handler
  function handleClick() {
    setCount(count + 1);
  }

  // display
  return (
    <button style={{ color: color }} onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
