import React, { useState } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

import LightOff from "../images/pic_bulboff.gif";
import LightOn from "../images/pic_bulbon.gif";

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

  // switch on off

  const [light, setLight] = useState(true);

  // Color change

  const [color, setColor] = useState("#f00");

  const onChangeHandler = (event) => {
    console.log("Selected color:", event.target.value);

    if (event.target.value === "red") {
      setColor("#f00");
    } else if (event.target.value === "green") {
      setColor("#0f0");
    } else if (event.target.value === "blue") {
      setColor("#00f");
    }
  };

  // Input
  const [inputText, setInputText] = useState();

  const onChangeInput = (event) => {
    setInputText(event.target.value);
  };

  // Textarea

  const [textLimit, setTextLimit] = useState("");

  const limitText = (event) => {
    let length = event.target.value.length;
    console.log(length);
    if (length < 51) {
      setTextLimit(event.target.value);
    }
  };

  return (
    <>
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
          <select name="colorChanger" onChange={onChangeHandler}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
          <div className="colorBox" style={{ backgroundColor: color }}></div>
        </div>
        <div>
          <h2>Input Text</h2>
          <input type="text" value={inputText} onChange={onChangeInput} />
          <p>{inputText}</p>
        </div>
        <div>
          <h2>Textarea Limitation {textLimit.length}</h2>
          <textarea cols="30" rows="10" value={textLimit} onChange={limitText}></textarea>
        </div>
        <div>
          <h2>Light On Light off</h2>
          <img src={light ? LightOff : LightOn} alt="" />
          <button
            type="button"
            onClick={() => {
              setLight((lightState) => !lightState);
            }}
          >
            {light ? "Light On" : "Light Off"}
          </button>
        </div>
      </div>
    </>
  );
}
