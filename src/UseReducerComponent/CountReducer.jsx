import React, { useReducer } from "react";

const render = (state, action) => {
  switch (action.type) {
    case "COUNT": {
    }
    default: {
      return state;
    }
  }
};

export default function CountReducer() {
  const [state, dispatch] = useReducer(render, 0);
  return (
    <div>
      <h1>CountReducer</h1>
      <p>{state}</p>
    </div>
  );
}
