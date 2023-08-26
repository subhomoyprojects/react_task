import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return state + 1;
    }
    case "DECREMENT": {
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }
    }
    default: {
      return state;
    }
  }
};
export default function Comp1() {
  const [state, dispatch] = useReducer(reducer, 0);
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <>
      <div className="container">
        <h1>{state}</h1>
        <button type="button" className="btn btn-success" onClick={increment}>
          +
        </button>
        <button type="button" className="btn btn-danger" onClick={decrement}>
          -
        </button>
      </div>
    </>
  );
}
