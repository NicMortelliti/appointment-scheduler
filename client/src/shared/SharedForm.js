import React from "react";
import { NavLink } from "react-router-dom";

// Components
import { default as Select } from "./SharedSelect";
import { default as Date } from "./SharedDateSelect";

// Test data
import { doctors, locations, dates, times } from "./TestData";
import { Button, ButtonGroup } from "@blueprintjs/core";

function SharedForm({
  formData,
  setFormData,
  handleSubmit,
  handleCancel,
  navlink = null,
}) {
  return (
    <form onSubmit={handleSubmit} className="bp4-form-group">
      {/* Doctor selection */}
      <Select
        label="Doctor"
        id="doctor"
        name="doctor"
        options={doctors}
        setFormData={setFormData}
        formData={formData}
      />

      {/* Location selection */}
      <Select
        label="Location"
        id="location"
        name="location"
        options={locations}
        setFormData={setFormData}
        formData={formData}
      />

      {/* Date selection */}
      <Date
        label="Date"
        id="date"
        setFormData={setFormData}
        formData={formData}
      />

      {/* Time selection */}
      <Select
        label="Time"
        id="time"
        name="time"
        options={times}
        setFormData={setFormData}
        formData={formData}
      />
      <ButtonGroup large vertical>
        <Button className="primary" type="submit" text="Submit" />
        {navlink ? (
          <NavLink to={navlink} exact>
            <Button intent="danger" minimal text="Discard Changes" />
          </NavLink>
        ) : (
          <Button
            intent="danger"
            minimal
            text="Discard Changes"
            onClick={handleCancel}
          />
        )}
      </ButtonGroup>
    </form>
  );
}

export default SharedForm;
