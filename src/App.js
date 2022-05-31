import React, { useState } from "react";

import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

function App() {

  const [usersList, setrUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setrUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge}];
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
