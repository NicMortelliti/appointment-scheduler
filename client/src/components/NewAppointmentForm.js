import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Components
import StyledCenterDiv from "../style/StyledCenterDiv";
import StyledSelectField from "../style/StyledSelectField";
import StyledDateSelectField from "../style/StyledDateSelectField";

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
      <StyledCenterDiv>
        <label htmlFor="selectDoctor">Doctor</label>
        <StyledSelectField
          name="selectDoctor"
          id="doctor"
          options={doctors}
          onChange={
            (e) => console.log(e)
            // setFormData({ ...formData, [e.target.id]: e.target.value })
          }
        />
      </StyledCenterDiv>
      <StyledCenterDiv>
        <label htmlFor="location">Location</label>
        <StyledSelectField
          name="selectLocation"
          id="location"
          options={locations}
        />
      </StyledCenterDiv>
      <StyledCenterDiv>
        <label htmlFor="date">Date</label>
        <StyledDateSelectField
          id="date"
          selected={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e })}
          highlightDates={dates}
          includeDates={dates}
        />
      </StyledCenterDiv>
      <StyledCenterDiv>
        <label htmlFor="time">Time</label>
        <StyledSelectField name="selectTime" id="time" options={times} />
      </StyledCenterDiv>
      <StyledCenterDiv className="button-group">
        <button className="primary center" type="submit">
          Submit
        </button>
        <div>
          <button className="secondary" onClick={(e) => handleCancelClick(e)}>
            Cancel
          </button>
        </div>
      </StyledCenterDiv>
    </form>
  );
}

export default NewAppointmentForm;
