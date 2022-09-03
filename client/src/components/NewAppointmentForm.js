import React, { useState } from "react";
import Select from "react-select";

function NewAppointmentForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    location: "",
    doctor: "",
  });

  const doctors = [
    { value: "1", label: "Jean-Martin Charcot" },
    { value: "2", label: "John Down" },
  ];

  function handleSubmit(e) {
    e.preventDefault(e);
    console.log("Submitting form");
  }

  const ApptSelectField = ({ name, options }) => {
    console.log(options);
    return (
      <Select
        className="basic-single"
        defaultValue={null}
        isDisabled={false}
        isLoading={false}
        isSearchable={true}
        name={name}
        options={options}
      />
    );
  };

  return (
    <form className="center" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="selectDoctor">Doctor</label>
        <Select name="selectDoctor" options={doctors} />
      </div>
      <label htmlFor="date">Date</label>
      <label htmlFor="time">Time</label>
    </form>
  );
}

export default NewAppointmentForm;
