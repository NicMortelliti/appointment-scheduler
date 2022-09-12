import React, { useState } from "react";

// Components
import { SharedSelect as Select } from "./SharedSelect";
import { SharedDateSelect as Date } from "./SharedDateSelect";

// Test data
import { doctors, locations, dates, times } from "./TestData";

function SharedForm({ label, id, name, options }) {
  const [formData, setFormData] = useState({
    doctor: "",
    location: "",
    date: "",
    time: "",
  });

  return (
    <div>
      {/* Doctor selection */}
      <Select
        label="Doctor"
        id="doctor"
        name="doctor"
        options={doctors}
        setFormData={setFormData}
        formData={formData}
      />

      {/* Location selection */}
      <Select
        label="Location"
        id="location"
        name="location"
        options="locations"
        setFormData={setFormData}
        formData={formData}
      />

      {/* Date selection */}
      <Date
        label="Date"
        id="date"
        setFormData={setFormData}
        formData={formData}
      />

      {/* Time selection */}
      <Select
        label="Time"
        id="time"
        name="time"
        options="times"
        setFormData={setFormData}
        formData={formData}
      />
    </div>
  );
}

export default SharedForm;
