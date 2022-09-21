import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// Components
import { default as Date } from "./SharedDateSelect";

// Test data
import { dates, times } from "./TestData";
import { Button, FormGroup } from "@blueprintjs/core";
import Select from "react-select";

function SharedForm({
  formData,
  setFormData,
  handleSubmit,
  handleCancel,
  navlink = null,
}) {
  const [doctorArray, setDoctorArray] = useState(null);

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
