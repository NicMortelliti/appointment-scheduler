import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { subDays, addDays } from "date-fns";
// import "react-datepicker/dist/react-datepicker-cssmodules.css";
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
          // onChange={(e) => console.log(e)}
          highlightDates={[Date(2022, 9, 6), addDays(new Date(), 7)]}
        />
      </div>
      <div>
        <label htmlFor="time">Time</label>
      </div>
    </form>
  );
}

export default NewAppointmentForm;
