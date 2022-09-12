import React, { useState } from "react";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting new appointment form!");
  };

  // Cancel logic
  const handleCancel = (e) => {
    e.preventDefault();
    setFormData({
      date: "",
      time: "",
      location: "",
      doctor: "",
    });
  };

  return (
    <Form
      formData={formData}
      setFormData={setFormData}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};

export default NewAppointmentForm;
