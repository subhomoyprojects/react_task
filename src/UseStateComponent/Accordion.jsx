import React, { useState } from "react";

export default function Accordion() {
  const accordionItems = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ducimus...",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ducimus...",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ducimus...",
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  // const toggleAccordion = (index) => {
  //   if (activeIndex === index) {
  //     setActiveIndex(-1);
  //   } else {
  //     setActiveIndex(index);
  //   }
  // };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="container">
      <ul className="accordion-holder">
        {accordionItems.map((item, index) => (
          <li key={index}>
            <h1 onClick={() => toggleAccordion(index)}>
              Title {index + 1} <span>{activeIndex === index ? "-" : "+"}</span>
            </h1>
            <p className={activeIndex === index ? "active" : ""}>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
