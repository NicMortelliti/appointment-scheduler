import React, { useState } from "react";

// Components
import CancelAppointmentConfirm from "./CancelAppointmentConfirm";
import Card from "./Card";
import RescheduleForm from "./RescheduleForm";

function Stack({ url }) {
  const [cancelConfirmOpen, setCancelConfirmOpen] = useState(false);
  const [rescheduleOpen, setRescheduleOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  return (
    <div className="card-stack center">
      <Card
        setCancelOpen={setCancelConfirmOpen}
        setRescheduleOpen={setRescheduleOpen}
        setApptDetails={setSelectedAppointment}
      />
      <CancelAppointmentConfirm
        isOpen={cancelConfirmOpen}
        setCancelOpen={setCancelConfirmOpen}
        url={url}
      />
      <RescheduleForm
        formOpen={rescheduleOpen}
        setFormOpen={setRescheduleOpen}
        appointment={selectedAppointment}
      />
    </div>
  );
}

export default Stack;
