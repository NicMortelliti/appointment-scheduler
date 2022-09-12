import React from "react";
import { FormGroup, HTMLSelect } from "@blueprintjs/core";

const SharedSelect = ({ label, id, name, options, setFormData, formData }) => {
  return (
    // Create reusable select component
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

export default SharedSelect;
