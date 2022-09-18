import React, { useState } from "react";
import Form from "./Form";
import TopDonaters from "./TopDonaters";
import "./restaurant.scss";

const Restaurant = () => {
  return (
    <div className="Restaurant">
      {/* <h1>{name}</h1> */}
      <Form />

      <TopDonaters />
    </div>
  );
};

export default Restaurant;
