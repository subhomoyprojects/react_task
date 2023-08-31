import React, { useReducer } from "react";

const initialState = {
  title: "",
  content: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TODO_INPUT":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const initialState1 = [];

const reducer1 = (state, action) => {
  switch (action.type) {
    case "TODO_STORE":
      return [...state, action.payload];
    case "DELETE_ITEM": {
      return state.filter((item, index) => {
        return index !== action.payload;
      });
    }
    default:
      return state;
  }
};

export default function TodoReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [state1, dispatch1] = useReducer(reducer1, initialState1);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    dispatch({ type: "TODO_INPUT", payload: { [name]: value } });
  };

  const addFunction = () => {
    dispatch1({ type: "TODO_STORE", payload: { ...state } });
    dispatch({ type: "TODO_INPUT", payload: { title: "", content: "" } });
  };

  const resetFunction = () => {
    dispatch({ type: "TODO_INPUT", payload: { title: "", content: "" } });
  };

  const deleteFunction = (index) => {
    dispatch1({ type: "DELETE_ITEM", payload: index });
  };

  return (
    <div className="container common-gap">
      <h1 style={{ textAlign: "center" }}>Todo</h1>
      <div className="todo-message-card">
        <input name="title" type="text" placeholder="Title" value={state.title} onChange={inputHandler} />
        <textarea name="content" placeholder="Message" value={state.content} onChange={inputHandler}></textarea>
        <div className="btn-holder">
          <button type="button" onClick={addFunction}>
            Add
          </button>
          <button type="button" className="reset" onClick={resetFunction}>
            Reset
          </button>
        </div>
      </div>

      <ul className="todo-items-holder">
        {state1.map((item, index) => (
          <li className="todo-item" key={index}>
            <h5>{item.title}</h5>
            <p>{item.content}</p>
            <button
              type="button"
              className="reset"
              onClick={() => {
                deleteFunction(index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
