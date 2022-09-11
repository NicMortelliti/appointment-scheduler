import React from "react";
import { FormGroup, HTMLSelect } from "@blueprintjs/core";

function StyledSelect([formData]) {
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

export default StyledSelect;
