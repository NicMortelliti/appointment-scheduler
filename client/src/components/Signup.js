import React, { useState } from "react";

function Signup({ onLogin, setSignUp }) {
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
    setSignUp(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConf: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="center">
      <label htmlFor="formData.firstName">First Name</label>
      <input
        type="text"
        id="firstName"
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
      <button primary type="submit">
        {isLoading ? "Loading..." : "Sign Up"}
      </button>
      <button onClick={(e) => resetForm(e)}>I have an account</button>
      {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
    </form>
  );
}

export default Signup;
