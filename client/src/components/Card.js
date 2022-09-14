import React from "react";
import {
  Alert,
  Button,
  ButtonGroup,
  Card as CardComp,
} from "@blueprintjs/core";

function Card({ setCancelOpen, setRescheduleOpen, setApptDetails }) {
  const apptDetails = {
    date: new Date("09/12/2022"),
    time: { id: 3, time: "12:30 PM" },
    doctor: { id: 2, name: "Joe Moe" },
    location: { id: 5, city: "Hillsboro" },
  };
  };

  const handleCancelClick = (e) => {
    setCancelOpen(true);
    setApptDetails(apptDetails);
  };

  return (
    <CardComp className="bp4-elevation-3 card">
      <div className="card-date">
        <p className="month">{apptDetails.month}</p>
        <h1 className="day">{apptDetails.day}</h1>
        <p className="time">{apptDetails.time}</p>
      </div>
      <div className="card-details">
        <div className="details card-doctor">
          <h5 className="label">Doctor:</h5>
          <p className="doctor-name">{apptDetails.doctor}</p>
        </div>
        <div className="details card-location">
          <h5 className="label">Location:</h5>
          <p className="address-street">{apptDetails.locStreet}</p>
          <p className="address-town-state">{apptDetails.locCity}</p>
        </div>
      </div>
      <ButtonGroup vertical className="card-btn-group">
        <Button
          large
          className="primary card-reschedule-btn"
          text="Reschedule"
          onClick={() => setRescheduleOpen(true)}
        />
        <Button
          minimal
          large
          className="secondary card-cancel-btn"
          text="Cancel"
          onClick={() => handleCancelClick(true)}
        />
      </ButtonGroup>
    </CardComp>
  );
}

export default Card;
