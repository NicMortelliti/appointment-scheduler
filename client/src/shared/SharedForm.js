import React from "react";
import { NavLink } from "react-router-dom";

// Components
import { default as Select } from "./SharedSelect";
import { default as Date } from "./SharedDateSelect";

// Test data
import { dates, doctors, locations, times } from "./TestData";
import { Button } from "@blueprintjs/core";

function SharedForm({
  formData,
  setFormData,
  handleSubmit,
  handleCancel,
  navlink = null,
}) {
  const RenderForm = () => {
    return (
      <form onSubmit={handleSubmit} className="bp4-form-group">
        {/* Doctor selection */}
        <Select
          label="Doctor"
          name="doctor"
          value={formData.doctor}
          options={doctors}
          optionLabel={(option) => option.name}
          setFormData={setFormData}
          formData={formData}
        />
        {/* Location selection */}
        {/* <Select
          label="Location"
          name="location"
          value={formData.location}
          options={locations}
          optionLabel={(option) => option.city}
          setFormData={setFormData}
          formData={formData}
        /> */}
        {/* Date selection */}
        <Date
          label="Date"
          id="date"
          options={dates}
          setFormData={setFormData}
          formData={formData}
        />
        {/* Time selection */}
        <Select
          label="Time"
          name="time"
          value={formData.time}
          options={times}
          optionLabel={(option) => option.time}
          setFormData={setFormData}
          formData={formData}
        />
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
