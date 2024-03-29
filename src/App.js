import React, { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
  };

  const Logout = () => {
    console.log("Logout") ? (
      <div className="welcome">
        <h2>
          Welcome, <span>{user.name}</span>
        </h2>
        <button>Logout</button>
      </div>
    ) : (
      <LoginForm Login={Login} error={error} />
    );
  };

  return <div className="App">{user.email !== ""}</div>;
}

export default App;
