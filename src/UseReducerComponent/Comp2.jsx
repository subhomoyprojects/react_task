import React, { useReducer } from "react";
import BulbOn from "../images/pic_bulbon.gif";
import BulbOff from "../images/pic_bulboff.gif";
const render = (state, action) => {
  switch (action.type) {
    case "LIGHT_STATE": {
      return (state = !state);
    }
    default: {
      return state;
    }
  }
};
export default function Comp2() {
  const [state, dispatch] = useReducer(render, false);

  return (
    <div>
      <h1>Comp2</h1>
      <img src={state ? BulbOn : BulbOff} alt="" />
      <button
        type="button"
        className="btn btn-info"
        onClick={() => {
          dispatch({ type: "LIGHT_STATE" });
        }}
      >
        {state ? "Switch On" : "Switch Off"}
      </button>
    </div>
  );
}
