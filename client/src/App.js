import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";

import TaskList from "./components/TaskList";
import Unsplash from "./components/Unsplash";
import Login2 from "./components/Login";
import Clock from "./components/Clock";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import authService from "./services/authService";

function App() {
  var users = [
    {
      userName: "tom",
      password: "123",
    },
    {
      userName: "peter",
      password: "123",
    },
  ];

  const [user, setUser] = useState({ name: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    var found = users.some(
      (user) =>
        user.password === details.password && user.userName === details.name
    );
    console.log(found);
    if (found) {
      setUser({ name: details.name });
      localStorage.setItem("user", JSON.stringify(details.name));
    } else {
      console.log("wrong password or account name");
      setError("wrong password or account name");
    }
  };

  useEffect(() => {
    // try {
    //   const userId = authService.getCurrentUser();
    //   console.log(userId);
    //   const response = authService.getCurrentUserById(userId._id);
    //   console.log(response);
    //   setUser({ name: response.data.name });
    // } catch (error) {
    //   console.log(error);
    // }
    // setUser({ name: "" });
  }, []);

  const logout = () => {
    console.log("logout");
    setUser({ name: "" });
    setError("");
  };
  return (
    <>
      <div className="clock-info">
        <Clock />
      </div>

      <div>
        {user.name !== "" ? (
          <div>
            hello {user.name} <button onClick={logout}>Logout</button>{" "}
          </div>
        ) : (
          <Login2 Login={Login} error={error} />
        )}
      </div>
      <div className="todo-webapp">
        <TaskList username={user.name} />
      </div>
      <Unsplash />
    </>
  );
}

export default App;
