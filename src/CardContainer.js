import React from "react";
import Card from "./Card";
import "./App.css";

function CardContainer(props) {
  return (
    <div className="card-container">
      {props.cards.map((card, index) => (
        <Card
          key={index}
          name={card.name}
          description={card.description}
          functionality={card.functionality}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
}

export default CardContainer;
