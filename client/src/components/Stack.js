import React, { useEffect, useState } from "react";

// Components
import CancelAppointmentConfirm from "./CancelAppointmentConfirm";
import Card from "./Card";
import RescheduleForm from "./RescheduleForm";

function Stack({ url, allAppointments, setAllAppointments }) {
  const [cancelConfirmOpen, setCancelConfirmOpen] = useState(false);
  const [rescheduleOpen, setRescheduleOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Fetch data from server
  useEffect(() => {
    fetch("/appointments")
      .then((r) => r.json())
      .then((data) => setAllAppointments(data));
  }, []);

  // Delete appointment
  const handleDeleteAppointment = (id) => {
    const updatedData = allAppointments.filter(
      (eachAppointment) => eachAppointment.id !== id
    );
    setAllAppointments(updatedData);
  };

  const RenderCards = () =>
    allAppointments.map((eachAppointment) => {
      return (
        <Card
          key={eachAppointment.id}
          details={eachAppointment}
          setCancelOpen={setCancelConfirmOpen}
          setRescheduleOpen={setRescheduleOpen}
          setApptDetails={setSelectedAppointment}
        />
      );
    });

  return (
    <div className="card-stack center">
      <RenderCards />
      <CancelAppointmentConfirm
        apptId={selectedAppointment}
        isOpen={cancelConfirmOpen}
        setCancelOpen={setCancelConfirmOpen}
        handleDeleteAppointment={handleDeleteAppointment}
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
