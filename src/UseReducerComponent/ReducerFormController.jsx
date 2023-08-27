import React, { useReducer } from "react";

const initialState = "#f00";

const render = (state, action) => {
  switch (action.type) {
    case "FORM": {
      if (action.payload === "red") {
        return (state = "#f00");
      } else if (action.payload === "green") {
        return (state = "#0f0");
      } else {
        return (state = "#00f");
      }
    }
    default: {
      return state;
    }
  }
};

export default function ReducerFormController() {
  const [state, dispatch] = useReducer(render, initialState);

  const onChangeHandler = (event) => {
    dispatch({ type: "FORM", payload: event.target.value });
  };
  return (
    <div className="container common-gap">
      <h1>ReducerFormController</h1>
      <select name="colorChanger" onChange={onChangeHandler}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      <div className="colorBox" style={{ backgroundColor: state }}></div>
    </div>
  );
}
