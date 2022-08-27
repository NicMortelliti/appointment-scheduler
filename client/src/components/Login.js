import React, { useState } from "react";

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

  // Set signup to false
  // Clear data from form
  function resetForm(e) {
    e.preventDefault();
    setSignUp(false);
    setFormData({
      email: "",
      password: "",
    });
  }

  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
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
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.id]: e.target.value })
        }
        autoComplete="current-password"
      />
      <button type="submit">Log In</button>
      <button onClick={() => setSignUp(true)}>Sign Up</button>
    </form>
  );
}

export default Login;
