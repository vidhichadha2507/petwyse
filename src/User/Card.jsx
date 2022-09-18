import React, { useState, useEffect } from "react";
import { database } from "../services/appwriteConfig";
import "./card.scss";

const Card = ({ forr, type, weight, location }) => {
  return (
    <div className="Card">
      <div className="Card-Container">
        <h1>{type}</h1>
        <p>{forr}</p>
        <p>{weight}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Card;
