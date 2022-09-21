import React, { useState } from "react";
import { Card } from "@blueprintjs/core";

// Components
import { default as Form } from "../shared/SharedForm";

const NewAppointmentForm = ({ allAppointments, setAllAppointments }) => {
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    doctor: "",
  });

  // Submit logic
  const handleSubmit = (e) => {
    e.preventDefault();
    formData.date.setHours(formData.time.hour);

    const sendFormData = {
      start: formData.date,
      doctor_id: formData.doctor.id,
    };
    fetch("/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendFormData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((appointment) => {
          setFormData({
            date: "",
            time: "",
            doctor: "",
          });
          setErrors([]);
          const newAllData = [...allAppointments, appointment];
          setAllAppointments(newAllData);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
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
