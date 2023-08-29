import React, { useReducer } from "react";

const accordionItems = [
  {
    title: "Accordion 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ducimus...",
  },
  {
    title: "Accordion 2",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ducimus...",
  },
  {
    title: "Accordion 3",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ducimus...",
  },
];
const render = (state, action) => {
  switch (action.type) {
    case "ACCORDION": {
      if (action.payload === state) {
        return (state = -1);
      } else {
        return action.payload;
      }
    }
    default: {
      return state;
    }
  }
};
export default function ReducerAccordion() {
  const [state, dispatch] = useReducer(render, -1);
  const toggleAccordion = (index) => {
    dispatch({ type: "ACCORDION", payload: index });
  };
  return (
    <div className="container common-gap">
      <ul className="accordion-holder">
        {accordionItems.map((item, index) => (
          <li key={index}>
            <h1 onClick={() => toggleAccordion(index)}>
              {item.title} <span>{state === index ? "-" : "+"}</span>
            </h1>
            <p className={state === index ? "active" : ""}>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
