import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

function UserInput(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

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
      setError({
        title: "Invalid input",
        message: "please enter a valid Name and Age (non-empty)",
      });
      return;
    }
    if (+userAge < 0) {
      setError({
        title: "Invalid Age",
        message: "please enter a valid Age (>0)",
      });
      return;
    }

    /****** this line executes function inside App.js which makes users list ******/
    props.onAddUser(userName, userAge);
    /****** empting inputs ******/
    setUserName("");
    setUserAge("");
  };

  /****** cleanin up errors ******/
  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {/****** this code checks if user have error ******/}
      {error && (<ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />)}
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
    </div>
  );
}

export default UserInput;
