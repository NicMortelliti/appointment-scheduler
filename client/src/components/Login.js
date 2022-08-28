import React, { useState } from "react";
import Button from "../style/components/Button";

function Login({ onLogin, setSignUp }) {
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
    <form className="center">
      <label htmlFor="email">Email</label>
      <input
        type="email"
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
      <Button primary type="submit">
        Log In
      </Button>
      <Button onClick={() => setSignUp(true)}>Sign Up</Button>
    </form>
  );
}

export default Login;
