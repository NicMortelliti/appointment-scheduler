import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// Components
import { default as Date } from "./SharedDateSelect";

// Test data
import { dates, times } from "./TestData";
import { Button, FormGroup } from "@blueprintjs/core";
import Select from "react-select";

function SharedForm({ selectedAppointment = null, setAppointments }) {
  const [doctorArray, setDoctorArray] = useState(null);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    datetime: ,
    doctorId: "",
  });

  // Collect array of doctors from API when form loads
  useEffect(() => {
    fetch(`/doctors`).then((r) => {
      if (r.ok) {
        r.json().then((doctors) =>
          setDoctorArray({ data: doctors, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setDoctorArray({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, []);

  // Handle form submit
  //
  // If selectedAppointment is NOT null (i.e.editing an appointment)
  // submit method will be PATCH.
  //
  // If selectedAppointment IS null (i.e. creating new appointment)
  // submit method will be POST.
  selectedAppointment ?
    fetch(`/appointment/${selectedAppointment.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        start: formData.,
        due_date: formData.due_date,
        project_id: formData.project_id,
        state: formData.state ? formData.state : 1,
        story_points: formData.story_points,
        user_id: formData.user_id,
      }),
    })
      .then((r) => r.json())
      .then((newTask) => handleDataUpdate(newTask))
      .then((e = setOpenPanel(e)));
  };

  // Render the form UI components
  const RenderForm = () => {
    return (
      <form onSubmit={handleSubmit} className="bp4-form-group">
        {/* Doctor selection */}
        <FormGroup label="Doctor">
          <Select
            id="doctor"
            name="doctor"
            large
            fill
            defaultValue={doctorArray ? doctorArray.data[0] : "Loading..."}
            value={formData.doctor ? formData.doctor : "Loading..."}
            options={doctorArray ? doctorArray.data : null}
            getOptionLabel={(option) =>
              `${option.title} ${option.first_name} ${option.last_name}`
            }
            getOptionValue={(option) => option.id}
            onChange={(e) => setFormData({ ...formData, doctor: e })}
          />
        </FormGroup>
        {/* Date selection */}
        <Date
          label="Date"
          id="date"
          options={dates}
          setFormData={setFormData}
          formData={formData}
        />
        {/* Time selection */}
        <FormGroup label="Time">
          <Select
            id="time"
            name="time"
            large
            fill
            defaultValue={times[0].label}
            value={formData.time}
            options={times}
            getOptionLabel={(option) => option.label}
            getOptionValue={(option) => option.id}
            onChange={(e) => setFormData({ ...formData, time: e })}
          />
        </FormGroup>
        <Button className="primary" type="submit" text="Submit" fill large />
        {navlink ? (
          <NavLink to={navlink} exact>
            <Button intent="danger" minimal text="Discard Changes" fill large />
          </NavLink>
        ) : (
          <Button
            intent="danger"
            minimal
            text="Discard Changes"
            onClick={handleCancel}
            fill
            large
          />
        )}
      </form>
    );
  };
  return <RenderForm />;
}

export default SharedForm;
