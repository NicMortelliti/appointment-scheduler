import React from "react";
import { DatePicker } from "@blueprintjs/datetime";
import { FormGroup } from "@blueprintjs/core";

const SharedDateSelect = ({ label, options, setFormData, formData }) => {
  const modifiers = {
    highlighted: [...options],
  };

  return (
    <FormGroup label={label} className="calendar">
      <DatePicker
        value={formData.date ? formData.date : null}
        highlightCurrentDay
        modifiers={modifiers}
        onChange={(date) => setFormData({ ...formData, date: date })}
      />
    </FormGroup>
  );
};

export default SharedDateSelect;
