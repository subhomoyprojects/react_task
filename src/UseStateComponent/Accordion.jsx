import React, { useState } from "react";

export default function Accordion() {
  const [state, setState] = useState(0);
  return (
    <div className="container">
      <ul className="accordion-holder">
        <li className="active">
          <h1>
            Title 1 <span>+</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ducimus asperiores commodi veniam mollitia rem voluptatibus animi odit nesciunt porro fuga quas illum facilis dolores officiis perferendis, minima ad voluptatum hic eos
            sit? Autem omnis dolore earum inventore perspiciatis. Aspernatur iste, alias eos ad sequi voluptatibus animi laudantium reprehenderit fuga.
          </p>
        </li>
        <li>
          <h1>
            Title 2 <span>+</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ducimus asperiores commodi veniam mollitia rem voluptatibus animi odit nesciunt porro fuga quas illum facilis dolores officiis perferendis, minima ad voluptatum hic eos
            sit? Autem omnis dolore earum inventore perspiciatis. Aspernatur iste, alias eos ad sequi voluptatibus animi laudantium reprehenderit fuga.
          </p>
        </li>
        <li>
          <h1>
            Title 3 <span>+</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ducimus asperiores commodi veniam mollitia rem voluptatibus animi odit nesciunt porro fuga quas illum facilis dolores officiis perferendis, minima ad voluptatum hic eos
            sit? Autem omnis dolore earum inventore perspiciatis. Aspernatur iste, alias eos ad sequi voluptatibus animi laudantium reprehenderit fuga.
          </p>
        </li>
      </ul>
    </div>
  );
}
