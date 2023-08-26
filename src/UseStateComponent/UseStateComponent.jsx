import React, { useState } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

export default function UseStateComponent() {
  // Toggle Component
  const [toggleComponent, setToggleComponent] = useState(true);
  const toggleButton = () => {
    setToggleComponent((elm) => !elm);
  };
  // Counter Component
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Color Change

  return (
    <>
      {/* Toggle Component create koro akta useState die  */}

      <div className="container common-gap">
        <h2>Toggle</h2>
        {toggleComponent ? <Component1 /> : <Component2 />}
        <button className="btn btn-success mt-1" onClick={toggleButton}>
          Toggle
        </button>
        <br />
        <br />
        <div>
          <h2>Counter</h2>
          <h4>{count}</h4>
          <div className="btn-holder mt-1">
            <button className="btn btn-success" onClick={increment}>
              Increment
            </button>
            <button className="btn btn-danger" onClick={decrement}>
              Decrement
            </button>
          </div>
        </div>
        <div>
          <h2>Color Change</h2>
          <select name="colorChanger">
            <option value="white">White</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
          </select>
        </div>
      </div>
    </>
  );
}
