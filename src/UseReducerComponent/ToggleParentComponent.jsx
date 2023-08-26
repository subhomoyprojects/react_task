import React, { useReducer } from "react";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_COMPONENT": {
      return (state = !state);
    }
    default: {
      return state;
    }
  }
};

export default function ToggleParentComponent() {
  const [state, dispatch] = useReducer(reducer, true);
  const toggleComp = () => {
    dispatch({ type: "TOGGLE_COMPONENT" });
  };
  return (
    <>
      <div className="container">
        <div>{state ? <Comp1 /> : <Comp2 />}</div>
        <br />
        <button className="btn btn-success" type="button" onClick={toggleComp}>
          Toggle
        </button>
      </div>
    </>
  );
}
