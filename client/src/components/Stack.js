import React, { useEffect, useState } from "react";

// Components
import CancelAppointmentConfirm from "./CancelAppointmentConfirm";
import Card from "./Card";

function Stack({
  allAppointments,
  setAllAppointments,
  selectedAppointment,
  setSelectedAppointment,
  user,
}) {
  const [cancelConfirmOpen, setCancelConfirmOpen] = useState(false);

  // Fetch data from server
  useEffect(() => {
    fetch("/appointments")
      .then((r) => r.json())
      .then((data) => setAllAppointments(data));
  }, [setAllAppointments]);

  // Delete appointment
  const handleDeletedAppointment = (id) => {
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

  const userFirstNameCapitalized =
    user.first_name.charAt(0).toUpperCase() +
    user.first_name.slice(1).toLowerCase();

  return (
    <div>
      {allAppointments.length > 0 ? (
        <div className="card-stack center">
          <h1 style={{ textAlign: "center" }}>
            Hey, {userFirstNameCapitalized}!
          </h1>
          <h2 style={{ textAlign: "center" }}>
            Here are your scheduled appointments:
          </h2>
          <RenderCards />
          <CancelAppointmentConfirm
            selectedAppointment={selectedAppointment}
            isOpen={cancelConfirmOpen}
            setCancelOpen={setCancelConfirmOpen}
            handleDeletedAppointment={handleDeletedAppointment}
          />
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1>Hi there, {userFirstNameCapitalized}!</h1>
          <h2>It looks like you don't have any appointments scheduled.</h2>
        </div>
      )}
    </div>
  );
}

export default Stack;
