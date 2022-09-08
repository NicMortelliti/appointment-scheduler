import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Error from "../style/Error";

function Signup({ onLogin }) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
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

  // Set signup to false
  // Clear data from form
  function resetForm(e) {
    e.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConf: "",
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="center">
        <label htmlFor="formData.firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          className="form-field"
          placeholder="Enter your first name"
          autoComplete="off"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          className="styled-text-field"
          placeholder="Enter your last name"
          autoComplete="off"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
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
          placeholder="Enter a password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          placeholder="Repeat your password"
          value={formData.passwordConf}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.id]: e.target.value })
          }
          autoComplete="current-password"
        />
        <div className="button-group">
          <button className="primary" type="submit">
            {isLoading ? "Loading..." : "Sign Up"}
          </button>
          <div>
            <NavLink to="/">I have an account</NavLink>
          </div>
        </div>
      </form>
      {errors.map((err) => (
        <Error key={err}>{err}</Error>
      ))}
    </>
  );
}

export default Signup;
