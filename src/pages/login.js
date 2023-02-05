import React, { useState } from "react";
import { auth } from "../firebase-config";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { onLogin } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await onLogin(email, password);
      navigate("/home");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="login-container">
      <h3>Login</h3>
      <input
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <input
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button onClick={handleSubmit}> Entrar </button>
    </div>
  );
}

export default Login;
