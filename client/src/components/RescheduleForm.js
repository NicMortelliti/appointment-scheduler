import React, { useState } from "react";
import { Dialog } from "@blueprintjs/core";

// Components
import { default as Form } from "../shared/SharedForm";

const RescheduleForm = ({ formOpen, setFormOpen }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    location: "",
    doctor: "",
  });

  // Submit logic
  // TODO Fetch PATCH to API "/appointment/[:id]"
  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log("Submitting reschedule form!");
  };

  // Cancel logic
  // TODO Fetch Get to API "/"
  const handleCancel = (e) => {
    e.preventDefault();
    setFormOpen(false);
    setFormData({
      date: "",
      time: "",
      location: "",
      doctor: "",
    });
  };

  return (
    <Dialog
      isOpen={formOpen}
      autoFocus
      canEscapeKeyCancel
      enforceFocus
      isCloseButtonShown
      title="Modify Appointment">
      <Form
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
    </Dialog>
  );
};

export default RescheduleForm;
