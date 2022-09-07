import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

  const locations = [
    { value: "1", label: "Lake Oswego" },
    { value: "2", label: "Wilsonville" },
    { value: "3", label: "Tigard" },
    { value: "4", label: "Portland" },
  ];

  const dates = [
    new Date("09/12/2022"),
    new Date("09/13/2022"),
    new Date("09/14/2022"),
    new Date("09/15/2022"),
    new Date("09/16/2022"),
  ];

  const times = [
    { value: "1", label: "11:00 AM" },
    { value: "2", label: "11:30 AM" },
    { value: "3", label: "2:00 PM" },
    { value: "4", label: "2:30 PM" },
  ];

  // FETCH next fields content based on current fields selection
  // const handleFieldSelection = (e) => {
  //   e.preventDefault();
  //   console.log("Selection made!");
  // };

  function handleSubmit(e) {
    e.preventDefault(e);
    console.log("Submitting form");
  }

  const ApptSelectField = ({ name, options }) => {
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
      <div>
        <label htmlFor="location">Location</label>
        <ApptSelectField name="selectLocation" options={locations} />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <DatePicker
          selected={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e })}
          highlightDates={dates}
          includeDates={dates}
        />
      </div>
      <div>
        <label htmlFor="time">Time</label>
        <Select name="selectTime" options={times}></Select>
      </div>
      <button className="primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default NewAppointmentForm;
