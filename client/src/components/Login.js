import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Components
import Error from "../style/Error";

function Login({ onLogin }) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <form className="center" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="styled-text-field"
          id="email"
          placeholder="Enter Email"
          autoComplete="off"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
          autoComplete="current-password"
        />
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
        <div className="button-group">
          <button className="primary" type="submit">
            {isLoading ? "Loading..." : "Log In"}
          </button>
          <div>
            <NavLink to="/signup">Sign Up</NavLink>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
