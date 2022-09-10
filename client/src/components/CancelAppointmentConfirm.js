import { Alert } from "@blueprintjs/core";

const CancelAppointmentConfirm = ({ isOpen, setCancelOpen, apptDetails }) => {
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
      <h5>Date:</h5>
      <p>
        {apptDetails.month} {apptDetails.day}
      </p>
      <h5>Time:</h5>
      <p>{apptDetails.time}</p>
      <h5>Doctor:</h5>
      <p>{apptDetails.doctor}</p>
    </Alert>
  );
};

export default CancelAppointmentConfirm;
