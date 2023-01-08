import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { async } from "q";
import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { useNavigate } from "react-router-dom";
import { account } from "../../services/appwriteConfig";
import { PetwyseContext } from "../../context/context";
import useStyles from "./styles";
import { useContext } from "react";

const Auth = () => {
  const classes = useStyles();
  const [isSignUp, setisSignUp] = useState(false);

  const navigate = useNavigate();
  // const { setName, name } = useContext(PetwyseContext);
  const [userData, setUserData] = useState({
    name: "jhb",
    email: "jhbgk@jhb.com",
    password: "jhbv",
    type: "Restaurant",
  });
  const options = ["Restaraunt", "Volunteer"];
  const defaultOption = options[0];
  const switchMode = () => {
    setisSignUp((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      try {
        const newUser = await account.create(
          "unique()",
          userData.email,
          userData.password,
          userData.name
        );

        console.log(newUser);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const loggeduser = await account.createEmailSession(
          userData.email,
          userData.password
        );
        localStorage.setItem("Name", loggeduser.name);
        console.log(loggeduser);
      } catch (error) {
        console.log(error);
      }
    }
    if (userData.type === "Restaurant") {
      navigate("/restaurant");
    } else {
      navigate("/user");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <TextField
                  onChange={(e) => {
                    setUserData({ ...userData, name: e.target.value });
                    console.log(e.target.value);
                  }}
                  name="Name"
                  label="Name"
                  fullWidth
                  autoFocus
                />
                {/* <Input
                  name="last Name"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                /> */}
              </>
            )}
            <TextField
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
              name="email"
              label="email"
              type="email"
              fullWidth
            />

            <TextField
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
              name="password"
              label="password"
              fullWidth
            />
            <Dropdown
              options={options}
              // onChange={this._onSelect}
              value={defaultOption}
              onChange={() => {
                setUserData({ ...userData, type: defaultOption });
              }}
              placeholder="Select an option"
            />

            {/* {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                type="password"
              />
            )} */}
          </Grid>
          <Button
            onClick={(e) => handleSubmit(e)}
            variant="contained"
            type="submit"
            fullWidth
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? "Already have an Account? Sign In"
                  : "Don't have an Account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
