import React, { useState } from "react";

function StateAssignmentTwo() {
  const [numbers, setNumbers] = useState([]);

  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * 10);
    setNumbers([...numbers, randomNum]);
  };

  return (
    <section>
      <button onClick={handleClick}>Click me!</button>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </section>
  );
}

export default StateAssignmentTwo;
