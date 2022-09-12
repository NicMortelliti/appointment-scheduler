import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, ButtonGroup, Card, FormGroup } from "@blueprintjs/core";

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
    <Card>
      <form className="center" onSubmit={handleSubmit}>
        <FormGroup label="Email">
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
        </FormGroup>
        <FormGroup label="Password">
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
        </FormGroup>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
        <ButtonGroup vertical large>
          <Button intent="primary" type="submit">
            {isLoading ? "Loading..." : "Log In"}
          </Button>
          <NavLink to="/signup">
            <Button minimal>Sign Up</Button>
          </NavLink>
        </ButtonGroup>
      </form>
    </Card>
  );
}

export default Login;
