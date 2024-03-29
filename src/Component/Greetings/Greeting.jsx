import React from "react";
import "./Greetings.css";

const Greeting = ({handleToggleAddModal}) => {
  return (
    <div className="greeting">
      <div className="goodmorning">
        <h1>Goodmorning!</h1>
        <p style={{ marginTop: "0px" }}>You got some task to do.</p>
      </div>
      <button type="button" onClick={() => handleToggleAddModal()} className="iconButton">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00008 1.16666V12.8333M1.16675 6.99999H12.8334"
            stroke="white"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Create New Task
      </button>
    </div>
  );
};
export default Greeting;
