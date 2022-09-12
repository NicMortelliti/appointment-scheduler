import React from "react";
import { DatePicker } from "@blueprintjs/datetime";
import { FormGroup } from "@blueprintjs/core";

const SharedDateSelect = ({ label, id, setFormData, formData }) => {
  return (
    <FormGroup label={label} className="calendar">
      <DatePicker
        value={formData.date ? formData.date : null}
        highlightCurrentDay
        onChange={(date) => setFormData({ ...formData, date: date })}
      />
    </FormGroup>
  );
};

export default SharedDateSelect;
