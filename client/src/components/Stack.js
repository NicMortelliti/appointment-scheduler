import React, { useEffect, useState } from "react";

// Components
import CancelAppointmentConfirm from "./CancelAppointmentConfirm";
import Card from "./Card";

function Stack({
  allAppointments,
  setAllAppointments,
  setSelectedAppointment,
}) {
  const [cancelConfirmOpen, setCancelConfirmOpen] = useState(false);

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
          setApptDetails={setSelectedAppointment}
        />
      );
    });

  return (
    <div className="card-stack center">
      <RenderCards />
      <CancelAppointmentConfirm
        isOpen={cancelConfirmOpen}
        setCancelOpen={setCancelConfirmOpen}
        handleDeleteAppointment={handleDeleteAppointment}
      />
    </div>
  );
}

export default Stack;
