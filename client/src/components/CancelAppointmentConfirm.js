import { Alert } from "@blueprintjs/core";

const CancelAppointmentConfirm = ({
  selectedAppointment,
  isOpen,
  setCancelOpen,
  handleDeletedAppointment,
}) => {
  // Delete appointment from server and client
  const handleDelete = (e) => {
    e.preventDefault();
    setCancelOpen(false);
    fetch(`/appointments/${selectedAppointment.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedAppointment) =>
        handleDeletedAppointment(deletedAppointment.id)
      );
  };

  return (
    <Alert
      isOpen={isOpen}
      cancelButtonText="No"
      confirmButtonText="Yes"
      canEscapeKeyCancel
      canOutsideClickCancel
      intent="danger"
      onCancel={() => setCancelOpen(false)}
      onConfirm={(e) => handleDelete(e)}>
      <p>Are you sure you want to cancel this appointment?</p>
    </Alert>
  );
};

export default CancelAppointmentConfirm;
