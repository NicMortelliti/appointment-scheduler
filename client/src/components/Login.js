import React, { useState } from "react";
import { Button, Card, FormGroup, InputGroup } from "@blueprintjs/core";

// Components
import Error from "../style/Error";
import Signup from "./Signup";

function Login({ onLogin }) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

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
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
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

  // Shared function to handle updating fields
  const handleFormFieldChange = (e) =>
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

  return (
    <>
      {showLogin ? (
        <Card className="card card-small">
          <h1
            style={{
              color: "#5c255c",
              fontWeight: "bold",
              fontFamily: "Poiret One",
            }}>
            PacNW Health
          </h1>
          <h3 className="card-subtitle">Please log in</h3>
          <form className="center" onSubmit={handleSubmit}>
            <InputGroup
              id="email"
              type="email"
              autoComplete="off"
              large
              round
              placeholder="Email"
              value={formData.email}
              style={{ marginBottom: "20px" }}
              onChange={(e) => handleFormFieldChange(e)}
            />
            <InputGroup
              id="password"
              type="password"
              autoComplete="off"
              large
              round
              placeholder="Password"
              value={formData.password}
              onChange={(e) => handleFormFieldChange(e)}
            />
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
            <div className="mt-20">
              <Button className="primary" type="submit" large fill>
                {isLoading ? "Loading..." : "Log In"}
              </Button>
              <Button minimal large fill onClick={() => setShowLogin(false)}>
                or, sign up
              </Button>
            </div>
          </form>
        </Card>
      ) : (
        <Signup onLogin={onLogin} setShowLogin={setShowLogin} />
      )}
    </>
  );
}

export default Login;
