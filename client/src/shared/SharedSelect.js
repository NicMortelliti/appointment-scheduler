import React from "react";
import { FormGroup } from "@blueprintjs/core";
import Select from "react-select";

const SharedSelect = ({
  label,
  name,
  value,
  options,
  optionLabel,
  setFormData,
  formData,
}) => {
  return (
    // Create reusable select component
    <FormGroup label={label}>
      <Select
        id={name}
        name={name}
        large
        fill
        defaultValue={options[0]}
        value={value}
        options={options}
        getOptionLabel={optionLabel}
        getOptionValue={(option) => option.id}
        onChange={(e) => setFormData({ ...formData, [name]: e })}
      />
    </FormGroup>
  );
};

export default SharedSelect;
