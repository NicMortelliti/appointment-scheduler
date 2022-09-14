import { Alert } from "@blueprintjs/core";

const CancelAppointmentConfirm = ({
  apptId,
  isOpen,
  setCancelOpen,
  handleDeleteAppointment,
  url,
}) => {
  // Delete appointment from server and client
  const handleDelete = (e) => {
    e.preventDefault();
    setCancelOpen(false)
    fetch(`${url}/appointments/${apptId.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedAppointment) =>
        handleDeleteAppointment(deletedAppointment.id)
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
