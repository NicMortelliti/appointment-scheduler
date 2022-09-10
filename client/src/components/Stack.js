import { Alert } from "@blueprintjs/core";
import React, { useState } from "react";

// Components
import CancelAppointmentConfirm from "./CancelAppointmentConfirm";
import Card from "./Card";

function Stack() {
  const [cancelConfirmOpen, setCancelConfirmOpen] = useState(false);
  const [selectedApptDetails, setSelectedApptDetails] = useState("");

  return (
    <div className="card-stack center">
      <Card
        setCancelOpen={setCancelConfirmOpen}
        setApptDetails={setSelectedApptDetails}
      />
      <Card
        setCancelOpen={setCancelConfirmOpen}
        setApptDetails={setSelectedApptDetails}
      />
      <Card
        setCancelOpen={setCancelConfirmOpen}
        setApptDetails={setSelectedApptDetails}
      />
      <CancelAppointmentConfirm
        isOpen={cancelConfirmOpen}
        setCancelOpen={setCancelConfirmOpen}
        apptDetails={selectedApptDetails}
      />
    </div>
  );
}

export default Stack;
