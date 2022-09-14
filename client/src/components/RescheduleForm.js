import React, { useEffect, useState } from "react";
import { Dialog } from "@blueprintjs/core";

// Components
import { default as Form } from "../shared/SharedForm";

const RescheduleForm = ({ formOpen, setFormOpen, appointment }) => {
  const [formData, setFormData] = useState(null);

  // Populate form with appointment details
  useEffect(() => {
    setFormData(appointment);
  }, [appointment]);

  const handleSelectChange = (e, key) => {
    setFormData({ ...formData, [key]: e });
  };

  // Submit logic
  // TODO Fetch PATCH to API "/appointment/[:id]"
  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log("Submitting reschedule form!");
  };

  // Cancel logic
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
      onClose={handleCancel}
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
