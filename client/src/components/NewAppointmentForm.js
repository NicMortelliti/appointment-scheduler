import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  FormGroup,
  HTMLSelect,
  MenuItem,
} from "@blueprintjs/core";
import { DatePicker } from "@blueprintjs/datetime";

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

  // Create reusable select component
  const Select = ({ label, id, name, options }) => {
    return (
      <FormGroup label={label}>
        <HTMLSelect
          id={id}
          name={name}
          large
          fill
          options={options}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        />
      </FormGroup>
    );
  };

  const birthdayStyle = `.DayPicker-Day--highlighted {
  background-color: orange;
  color: white;
}`;

  const modifiers = {
    highlighted: new Date(2022, 9, 19),
  };

  const modifiersStyles = {
    thursdays: {
      color: "#ffc107",
      backgroundColor: "#fffdee",
    },
  };

  // Submit logic
  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log(formData);
  };

  // Cancel logic
  const handleCancelClick = (e) => {
    e.preventDefault();
    setFormData({
      date: "",
      time: "",
      location: "",
      doctor: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Select
        label="Doctor"
        id="selectDoctor"
        name="doctor"
        options={doctors}
      />
      <Select
        label="Location"
        id="selectLocation"
        name="location"
        options={locations}
      />
      <div>
        <style>{birthdayStyle}</style>
        <label htmlFor="date">Date</label>
        <DatePicker
          value={formData.date ? formData.date : null}
          onChange={(date) => setFormData({ ...formData, date: date })}
          modifiers={modifiers}
          // modifiersStyles={modifiersStyles}
        />
        {/* <Select
          id="date"
          selected={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e })}
          highlightDates={dates}
          includeDates={dates}
        /> */}
      </div>
      <Select label="Time" id="selectTime" name="time" options={times} />
      <ButtonGroup vertical>
        <Button intent="primary" large type="submit">
          Submit
        </Button>
        <Button intent="danger" large minimal>
          Cancel
        </Button>
      </ButtonGroup>
    </form>
  );
}

export default NewAppointmentForm;
