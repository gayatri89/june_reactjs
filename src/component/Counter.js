import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increCount = () => {
    return setCount(count + 1);
  };

  const decreCount = () => {
    return count > 0 ? setCount(count - 1) : alert("oops! ZERO limit reached");
  };

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={increCount}>Increment</button>
        <button onClick={decreCount}>Decrement</button>
      </div>
    </>
  );
};

export default Counter;
