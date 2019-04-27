import React from "react";

const Card = props => (
  <div className="card-container">
    <div className="card">
      <div className="front">
        <div className="question">{props.question}</div>
      </div>
      <div className="back">
        <div className="answer">{props.answer}</div>
      </div>
    </div>
  </div>
);

export default Card;
