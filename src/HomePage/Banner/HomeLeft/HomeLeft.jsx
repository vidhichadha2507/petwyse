import React from "react";
import "./homeleft.scss";
import { useNavigate } from "react-router";

const HomeLeft = () => {
  const navigate = useNavigate();
  return (
    <div className="Left">
      <h1 className="Main-heading">
        The Best Among you are those who bring greatest benefit to many others.!
      </h1>
      <p className="Main-Paragraph">Holding Hands With Community</p>

      <div className="Main-Buttons">
        <button
          onClick={() => {
            navigate("/auth");
          }}
          className="Login-Button"
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate("/auth");
          }}
          className="SignUp-Button"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default HomeLeft;
