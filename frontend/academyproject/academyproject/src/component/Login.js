
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3003/users/login", { name, password })
      .then(() => {
        alert("Login Successful");
        navigate("/staffdetail");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label>Username : </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter the username" />
        <br />
        <br />

        <label>Password :</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter the password" />
        <br />
        <br />

        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}



