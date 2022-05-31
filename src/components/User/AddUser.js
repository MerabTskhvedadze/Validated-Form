import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

function UserInput(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  /****** getting and setting entered value in inputs ******/
  const nameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  /****** this function will execute when user click on button ******/
  const addUserHandler = (event) => {
    event.preventDefault();

    /****** checks if users input is valid ******/
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }
    if (userAge < 0) {
      return;
    }
    console.log(userName + " " + userAge);

    /****** empting inputs for next text ******/
    setUserName("");
    setUserAge("");
  };

  return (
    <Card className={classes.input}>
      <form className="form" onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          value={userName}
          id="username"
          type="text"
          onChange={nameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          value={userAge}
          id="age"
          type="number"
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default UserInput;
