import React, { createContext, useState } from "react";

export const PetwyseContext = createContext();

const Context = ({ children }) => {
  const [foodDetails, setFoodDetails] = useState({
    type: "",
    for: "",
    weight: "",
    location: "",
  });

  const [userData, setUserData] = useState({
    name: "jhb",
    email: "jhbgk@jhb.com",
    password: "jhbv",
    type: "Restaurant",
  });

  return (
    <PetwyseContext.Provider
      value={{ foodDetails, setFoodDetails, userData, setUserData }}
    >
      {children}
    </PetwyseContext.Provider>
  );
};

export default Context;
