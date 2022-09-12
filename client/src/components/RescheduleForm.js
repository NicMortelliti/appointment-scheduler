import React, { useState } from "react";
import { Dialog } from "@blueprintjs/core";

// Components
import { default as Form } from "../shared/SharedForm";

const RescheduleForm = ({ isOpen, setRescheduleOpen }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    location: "",
    doctor: "",
  });

  // Submit logic
  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log("Submitting reschedule form!");
  };

  // Cancel logic
  const handleCancel = (e) => {
    e.preventDefault();
    setFormData({
      date: "",
      time: "",
      location: "",
      doctor: "",
    });
  };

  return (
    <Dialog
      isOpen={isOpen}
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
