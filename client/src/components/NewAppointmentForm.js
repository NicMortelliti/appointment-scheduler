import React, { useState } from "react";

function NewAppointmentForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    location: "",
    doctor: "",
  });

  function handleSubmit(e) {
    e.preventDefault(e);
    console.log("Submitting form");
  }

  return (
    <form className="center" onSubmit={handleSubmit}>
      <label htmlFor="doctor">Doctor</label>
      <label htmlFor="location">Location</label>
      <label htmlFor="date">Date</label>
      <label htmlFor="time">Time</label>
    </form>
  );
}

export default NewAppointmentForm;
