import { Alert } from "@blueprintjs/core";

const CancelAppointmentConfirm = ({ isOpen, setCancelOpen }) => {
  return (
    <Alert
      isOpen={isOpen}
      cancelButtonText="No"
      confirmButtonText="Yes"
      canEscapeKeyCancel
      canOutsideClickCancel
      intent="danger"
      onCancel={() => setCancelOpen(false)}
      onConfirm={() => console.log("Deleting!")}>
      <p>Are you sure you want to cancel this appointment?</p>
    </Alert>
  );
};

export default CancelAppointmentConfirm;
