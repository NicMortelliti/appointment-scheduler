import React, { useEffect, useState } from "react";

// Components
import CancelAppointmentConfirm from "./CancelAppointmentConfirm";
import Card from "./Card";
import RescheduleForm from "./RescheduleForm";

function Stack({ url }) {
  const [cancelConfirmOpen, setCancelConfirmOpen] = useState(false);
  const [rescheduleOpen, setRescheduleOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [allAppointments, setAllAppointments] = useState(null);

  // Fetch data from server
  useEffect(() => {
    fetch(`${url}appointments`)
      .then((r) => r.json())
      .then((data) => setAllAppointments(data));
  }, []);

  return (
    <div className="card-stack center">
      <Card
        setCancelOpen={setCancelConfirmOpen}
        setRescheduleOpen={setRescheduleOpen}
        setApptDetails={setSelectedAppointment}
      />
      <CancelAppointmentConfirm
        apptId={selectedAppointment}
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
