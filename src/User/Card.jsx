import React, { useState, useEffect } from "react";
import { database } from "../services/appwriteConfig";
import "./card.scss";

const Card = ({ forr, type, weight, location }) => {
  return (
    <div className="Card">
      <div className="Card-Container">
        <h1>{`Type of Food -> ${type}`}</h1>
        <p>{`Compatible for ${forr}`}</p>
        <p>{`Total Weight ->${weight}kg`}</p>
        {/* <p>{location}</p> */}
      </div>
    </div>
  );
};

export default Card;
