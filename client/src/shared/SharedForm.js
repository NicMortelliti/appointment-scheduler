import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Components
import { default as DateSelect } from "./SharedDateSelect";

// Test data
import { dates, times } from "./TestData";
import { Button, Dialog, FormGroup } from "@blueprintjs/core";
import Select from "react-select";

function SharedForm({ selectedAppointment = null, setAppointments }) {
  const [doctorArray, setDoctorArray] = useState(null);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    doctor: "",
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
  const handleSubmit = (e) => {
    e.preventDefault();

    const dateTime = new Date(
      formData.date.getFullYear(),
      formData.date.getMonth() + 1,
      formData.date.getDate(),
      formData.time.hour
    );

    console.log(`start: ${dateTime}, doctor_id: ${formData.doctor.id}`);

    selectedAppointment
      ? fetch(`/appointments/${selectedAppointment.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            start: dateTime,
            doctor_id: formData.doctor.id,
          }),
        })
          .then((r) => r.json())
          .then((updatedTask) => handleDataUpdate(updatedTask))
      : fetch(`/appointments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            start: dateTime,
            doctor_id: formData.doctor.id,
          }),
        })
          .then((r) => r.json())
          .then((newTask) => handleDataUpdate(newTask));
  };

  const handleDataUpdate = (task) => console.log(task);

  const handleCancel = () => {
    console.log("cancelling...");
  };

  // Render the form UI components
  const RenderForm = () => {
    return (
      <Dialog
        isOpen={true}
        autoFocus
        canEscapeKeyCancel
        enforceFocus
        isCloseButtonShown
        onClose={handleCancel}
        title={
          selectedAppointment ? "Modify Appointment" : "Schedule Appointment"
        }>
        <form onSubmit={(e) => handleSubmit(e)} className="bp4-form-group">
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
          <DateSelect
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
          <Link to="/">
            <Button
              intent="danger"
              minimal
              text="Discard Changes"
              fill
              large
              onClick={handleCancel}
            />
          </Link>
        </form>
      </Dialog>
    );
  };
  return <RenderForm />;
}

export default SharedForm;
