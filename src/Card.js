
import React from "react";
import "./App.css";

function Card(props) {

  return (
    <div className="container">
      <div className="card">
        <div className="front">
          <h1 className="name">{props.name}</h1>
          <img src={props.imageUrl} className="image"/>

        </div>
        <div className="back">
          <h1 className="desc">{props.description}</h1>
          <p className="func">{props.functionality}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
