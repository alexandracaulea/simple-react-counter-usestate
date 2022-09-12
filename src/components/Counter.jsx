import { useState } from "react";

function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const reset = () => {
    setCount(initialCount);
  };

  return (
    <div>
      <h2>Counter is: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
