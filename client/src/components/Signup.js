import React, { useState } from "react";

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

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="formData.firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        autoComplete="off"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={formData.password}
        onChange={(e) => setFormData(formData.password[e.target.value])}
        autoComplete="current-password"
      />
      <label htmlFor="password">Password Confirmation</label>
      <input
        type="password"
        id="password_confirmation"
        value={formData.passwordConf}
        onChange={(e) => setFormData(formData.passwordConf[e.target.value])}
        autoComplete="current-password"
      />
      <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
    </form>
  );
}

export default Signup;
