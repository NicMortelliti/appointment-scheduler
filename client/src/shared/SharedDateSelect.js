import React from "react";
import { DatePicker } from "@blueprintjs/datetime";

const SharedDateSelect = ({ label, id, setFormData, formData }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <DatePicker
        value={formData.date ? formData.date : null}
        onChange={(date) => setFormData({ ...formData, date: date })}
      />
    </div>
  );
};

export default SharedDateSelect;
