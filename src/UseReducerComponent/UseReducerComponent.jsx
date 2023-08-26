import React, { useReducer, useEffect } from "react";

const initialState = [];

const render = (state, action) => {
  switch (action.type) {
    case "API_GET": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default function UseReducerComponent() {
  const [state, dispatch] = useReducer(render, initialState);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((element) => element.json())
      .then((data) => dispatch({ type: "API_GET", payload: data }))
      .catch((err) => err);
  }, []);

  return (
    <>
      <div className="container common-gap">
        {Array.isArray(state) &&
          state.map((item) => {
            return <h1 key={item.id}>{item.title}</h1>;
          })}
      </div>
    </>
  );
}
