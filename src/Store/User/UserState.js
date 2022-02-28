import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";

function UserState(props) {
  const [info, setInfo] = useState({
    name: "",
  });
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://bloodwarriorsindia.herokuapp.com/api/auth/getuser", {
        method: "GET",
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      setInfo({
        name: json.firstName + " " +json.lastName,
      });
    }
    fetchData();
  }, []);
  return (
    <UserContext.Provider value={{ info }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserState;
