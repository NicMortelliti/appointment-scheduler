import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, ButtonGroup, Card, FormGroup } from "@blueprintjs/core";
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

  // Set signup to false and
  // clear data from form
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
    <Card>
      <form onSubmit={handleSubmit} className="center">
        <FormGroup label="First Name">
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
        </FormGroup>
        <FormGroup label="Last Name">
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
        </FormGroup>
        <FormGroup label="Email">
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
        </FormGroup>
        <FormGroup label="Password">
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
        </FormGroup>
        <FormGroup label="Re-enter Password">
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
        </FormGroup>
        <div>
          <Button className="primary" type="submit" large fill>
            {isLoading ? "Loading..." : "Sign Up"}
          </Button>
          <NavLink to="/">
            <Button minimal large fill>
              I have an account
            </Button>
          </NavLink>
        </div>
      </form>
      {errors.map((err) => (
        <Error key={err}>{err}</Error>
      ))}
    </Card>
  );
}

export default Signup;
