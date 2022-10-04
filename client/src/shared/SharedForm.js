import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

// Components
import TimeSlotSelector from "../shared/TimeSlotChart";

// Test data
import { Button, FormGroup } from "@blueprintjs/core";
import Select from "react-select";

function SharedForm({ allAppointments, selectedAppointment, setAppointments }) {
  const history = useHistory();
  const [doctorArray, setDoctorArray] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [formData, setFormData] = useState({
    dateTime: "",
    doctor: "",
  });

  // If editing appointment, populate form with appointment data.
  useEffect(() => {
    if (selectedAppointment) {
      const date = new Date(selectedAppointment.start);
      const milliDate = date.getTime();

      // Populate form data with existing appointment data
      setFormData({
        dateTime: selectedAppointment.start,
        doctor: selectedAppointment.doctor,
      });

      // Set selected timeslot to existing timeslot to allow
      // highlighting of the timeslot in the chart
      setSelectedTimeSlot(milliDate);
    }
  }, [selectedAppointment]);

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
    // Set path and method depending on whether we're adding
    // a new appointment or updating an existing appointment.
    let path, method;
    if (selectedAppointment) {
      path = `/appointments/${selectedAppointment.id}`;
      method = "PATCH";
    } else {
      path = `/appointments`;
      method = "POST";
    }

    // Send fetch to API
    fetch(path, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        start: formData.dateTime,
        doctor_id: formData.doctor.id,
      }),
    })
      .then((r) => r.json())
      .then((appointment) => handleDataUpdate(appointment))
      .then(history.push("/"));
  };

  const handleDataUpdate = (newUpdatedAppointment) => {
    let newAllAppointments;
    if (selectedAppointment) {
      // If editing existing appointment
      newAllAppointments = allAppointments.map((existingAppointment) => {
        if (existingAppointment.id === newUpdatedAppointment.id) {
          return newUpdatedAppointment;
        } else {
          return existingAppointment;
        }
      });
    } else {
      // If adding new task
      newAllAppointments = [...allAppointments, newUpdatedAppointment];
    }

    // Set new data
    setAppointments(newAllAppointments);
  };

  // Render the form UI components
  const RenderForm = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>
          {selectedAppointment
            ? "Modify your appointment"
            : "Schedule a new appointment"}
        </h2>
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
          {/* Date/Time selection */}
          {formData.doctor && (
            <TimeSlotSelector
              setFormData={setFormData}
              formData={formData}
              setSelected={setSelectedTimeSlot}
              selected={selectedTimeSlot}
            />
          )}

          <div style={{ margin: "20px auto", width: "40%" }}>
            <Button
              disabled={
                formData.doctor ? (formData.dateTime ? false : true) : true
              }
              style={{ margin: "20px auto" }}
              className="primary"
              type="submit"
              text="Submit"
              fill
              large
            />
            <Link to="/">
              <Button
                intent="danger"
                minimal
                text="Discard Changes"
                fill
                large
              />
            </Link>
          </div>
        </form>
      </div>
    );
  };
  return <RenderForm />;
}

export default SharedForm;
