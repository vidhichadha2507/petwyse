import React, { useState, useEffect } from "react";
import { database } from "../services/appwriteConfig";
import Card from "./Card";
import "./user.scss";

const User = () => {
  const [foodDetails, setFoodDetails] = useState([]);
  useEffect(() => {
    const getFoods = async () => {
      try {
        const getFoods = await database.listDocuments(
          "63269b368ea087325d9c",
          "63269baf43c60b1a2ec9"
        );
        console.log(getFoods);
        setFoodDetails(getFoods.documents);
      } catch (error) {
        console.log(error);
      }
    };
    getFoods();
  }, []);
  return (
    <div className="Main-Body">
      <div className="Users">
        {foodDetails.map((food) => {
          return (
            <Card
              forr={food.for}
              type={food.type}
              weight={food.weight}
              location={food.location}
            />
          );
        })}
      </div>

      <div className="right-Part">Right</div>
    </div>
  );
};

export default User;
