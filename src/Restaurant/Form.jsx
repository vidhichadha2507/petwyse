import { async } from "q";
import React, { useState } from "react";
import { database } from "../services/appwriteConfig";
import "./form.scss";

const Form = () => {
  const [foodDetails, setFoodDetails] = useState({
    type: "",
    for: "",
    weight: "",
    location: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const foodDetailsReceived = await database.createDocument(
        "63269b368ea087325d9c",
        "63269baf43c60b1a2ec9",
        "unique()",
        foodDetails
      );

      const getFoods = await database.listDocuments(
        "63269b368ea087325d9c",
        "63269baf43c60b1a2ec9"
      );
      console.log(getFoods);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Card">
      <h1>Food Details</h1>
      <form>
        <label>Type of Food</label>
        <br />
        <input
          onChange={(e) =>
            setFoodDetails({ ...foodDetails, type: e.target.value })
          }
          type="text"
          id="type"
        />
        <br />

        <label>Animals</label>
        <br />
        <input
          onChange={(e) =>
            setFoodDetails({ ...foodDetails, for: e.target.value })
          }
          type="text"
          id="for"
        />
        <br />

        <label>Weight</label>
        <br />
        <input
          onChange={(e) =>
            setFoodDetails({ ...foodDetails, weight: e.target.value })
          }
          type="number"
          id="weight"
        />
        <br />

        <br />

        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          className="btn"
        >
          List Food
        </button>
      </form>
    </div>
  );
};

export default Form;
