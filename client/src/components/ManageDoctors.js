import React, { useState } from "react";
import { Button, FormGroup } from "@blueprintjs/core";
import { Link, useHistory } from "react-router-dom";

function ManageDoctors() {
  const history = useHistory();
  const defaultFormData = { title: "Dr.", firstName: "", lastName: "" };

  const [formData, setFormData] = useState({ ...defaultFormData });

  const handleSubmit = () => {
    fetch("/doctors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        first_name: formData.firstName,
        last_name: formData.lastName,
      }),
    })
      .then((r) => r.json())
      .then(history.push("/"));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>You found the secret page! 🔎</h3>
      <h4>Here, you can add a new doctor to the server.</h4>
      <form onSubmit={(e) => handleSubmit(e)} className="bp4-form-group">
        <FormGroup label="Doctors First Name">
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup label="Doctors Last Name">
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </FormGroup>
        <Button
          disabled={
            formData.firstName ? (formData.lastName ? false : true) : true
          }
          style={{ margin: "20px auto" }}
          className="primary"
          type="submit"
          text="Submit"
          fill
          large
        />
        <Link to="/">
          <Button intent="danger" minimal text="Discard Changes" fill large />
        </Link>{" "}
      </form>
    </div>
  );
}

export default ManageDoctors;
