import { Alert } from "@blueprintjs/core";
import React, { useState } from "react";

// Components
import CancelAppointmentConfirm from "./CancelAppointmentConfirm";
import Card from "./Card";
import RescheduleForm from "./RescheduleForm";

function Stack() {
  const [cancelConfirmOpen, setCancelConfirmOpen] = useState(false);
  const [rescheduleOpen, setRescheduleOpen] = useState(false);
  const [selectedApptDetails, setSelectedApptDetails] = useState("");

  return (
    <div className="card-stack center">
      <Card
        setCancelOpen={setCancelConfirmOpen}
        setRescheduleOpen={setRescheduleOpen}
        setApptDetails={setSelectedApptDetails}
      />
      <Card
        setCancelOpen={setCancelConfirmOpen}
        setRescheduleOpen={setRescheduleOpen}
        setApptDetails={setSelectedApptDetails}
      />
      <Card
        setCancelOpen={setCancelConfirmOpen}
        setRescheduleOpen={setRescheduleOpen}
        setApptDetails={setSelectedApptDetails}
      />
      <CancelAppointmentConfirm
        isOpen={cancelConfirmOpen}
        setCancelOpen={setCancelConfirmOpen}
        apptDetails={selectedApptDetails}
      />
      <RescheduleForm
        isOpen={rescheduleOpen}
        setRescheduleOpen={setRescheduleOpen}
      />
    </div>
  );
}

export default Stack;
