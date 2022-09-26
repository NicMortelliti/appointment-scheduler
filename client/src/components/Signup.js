import React, { useState } from "react";
import { Button, Card, InputGroup } from "@blueprintjs/core";
import Error from "../style/Error";

function Signup({ onLogin, setShowLogin }) {
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

  const handleFormFieldChange = (e) =>
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

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
          <InputGroup
            id="firstName"
            type="text"
            autoComplete="off"
            large
            round
            placeholder="First Name"
            value={formData.firstName}
            style={{ marginBottom: "20px" }}
            className="left name"
            onChange={(e) => handleFormFieldChange(e)}
          />
          <InputGroup
            id="lastName"
            type="text"
            autoComplete="off"
            large
            round
            placeholder="Last Name"
            value={formData.lastName}
            style={{ marginBottom: "20px" }}
            className="left name"
            onChange={(e) => handleFormFieldChange(e)}
          />
        </div>
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
          style={{ marginBottom: "20px" }}
          onChange={(e) => handleFormFieldChange(e)}
        />
        <InputGroup
          id="passwordConfirmation"
          type="password"
          autoComplete="off"
          large
          round
          placeholder="Repeat Password"
          value={formData.passwordConfirmation}
          onChange={(e) => handleFormFieldChange(e)}
        />
        <div className="mt-20">
          <Button className="primary" type="submit" large fill>
            {isLoading ? "Loading..." : "Submit"}
          </Button>
          <Button minimal large fill onClick={() => setShowLogin(true)}>
            I have an account
          </Button>
        </div>
      </form>
      {errors.map((err) => (
        <Error key={err}>{err}</Error>
      ))}
    </Card>
  );
}

export default Signup;
