import React, { useReducer } from "react";

const initialState = "";
const reducer = (state, action) => {
  switch (action.type) {
    case "WORD_LIMITATION": {
      let wordCount = action.payload.split(" ").filter((elm) => elm !== "").length;
      if (wordCount <= 10) {
        return action.payload;
      } else {
        return state;
      }
    }
    default: {
      return state;
    }
  }
};

export default function UseReducerWordLimit() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const wordLimit = (event) => {
    let value = event.target.value;
    dispatch({ type: "WORD_LIMITATION", payload: value });
  };
  return (
    <div className="container">
      <h1>Word Limitation</h1>
      <textarea value={state} onChange={wordLimit}></textarea>
      <p>Remaining words: {10 - state.split(" ").filter((elm) => elm !== "").length}</p>
    </div>
  );
}
