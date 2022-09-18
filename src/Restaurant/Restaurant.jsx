import React, { useState } from "react";

import Form from "./Form";
import TopDonaters from "./TopDonaters";
import "./restaurant.scss";
import Maps from "../components/maps";
import NavBar from "../HomePage/NavBar";

const Restaurant = () => {
  return (
    <div>
      <NavBar />
      <div className="Restaurant">
        {/* <h1>{name}</h1> */}
        <Form />

        <TopDonaters />
      </div>
    </div>
  );
};

export default Restaurant;
