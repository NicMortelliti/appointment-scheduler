import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, FormGroup } from "@blueprintjs/core";
import Error from "../style/Error";

function Signup({ onLogin }) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
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
      body: JSON.stringify({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.passwordConfirmation,
      }),
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
      passwordConfirmation: "",
    });
  }

  return (
    <Card className="card card-small">
      <h1
        style={{
          color: "#5c255c",
          fontWeight: "bold",
          fontFamily: "Poiret One",
        }}>
        PacNW Health
      </h1>
      <h3 className="card-subtitle">Create an account</h3>
      <form onSubmit={handleSubmit} className="center">
        <div className="name-line">
          <FormGroup label="First Name" className="mt-20 left name">
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
          <FormGroup label="Last Name" className="mt-20 left name">
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
        </div>
        <FormGroup label="Email" className="mt-20 left">
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
        <FormGroup label="Password" className="mt-20 left">
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
        <FormGroup label="Re-enter Password" className="mt-20 left">
          <input
            type="password"
            id="passwordConfirmation"
            placeholder="Repeat your password"
            value={formData.passwordConfirmation}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
            autoComplete="current-password"
          />
        </FormGroup>
        <div className="mt-20">
          <Button className="primary" type="submit" large fill>
            {isLoading ? "Loading..." : "Submit"}
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
