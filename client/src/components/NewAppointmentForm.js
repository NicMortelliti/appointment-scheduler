import React, { useState } from "react";
import { Card } from "@blueprintjs/core";

// Components
import { default as Form } from "../shared/SharedForm";

const NewAppointmentForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    location: "",
    doctor: "",
  });

  // Submit logic
  // TODO Fetch POST to API "/newappointment"
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting new appointment form!");
  };

  // Cancel logic
  // TODO Fetch Get to API "/"
  const handleCancel = (e) => {
    e.preventDefault();
    console.log("Attempting to cancel");
    setFormData({
      date: "",
      time: "",
      location: "",
      doctor: "",
    });
  };

  return (
    <Card className="card">
      <h2 className="card-subtitle" style={{ textAlign: "center" }}>
        Schedule an appointment
      </h2>
      <Form
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        navlink="/"
      />
    </Card>
  );
};

export default NewAppointmentForm;
