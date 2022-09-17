import React from "react";
import Banner from "./HomePage/Banner/Banner";
import NavBar from "./HomePage/NavBar";
import Donations from "./HomePage/Donations/Donations";
import Footer from "./HomePage/Footer/Footer";
const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Banner/>
      <Donations/>
      <Footer/>
          
    </div>
  );
};

export default HomePage;
