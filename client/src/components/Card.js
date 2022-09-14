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

  const handleRescheduleClick = (e) => {
    e.preventDefault();
    setApptDetails(apptDetails);
    setRescheduleOpen(true);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setCancelOpen(true);
    setApptDetails(apptDetails);
  };

  return (
    <CardComp className="card">
      <div className="card-date">
        <p className="month">
          {apptDetails.date.toLocaleString("default", { month: "long" })}
        </p>
        <h1 className="day">{apptDetails.date.getDate() + 1}</h1>
        <p className="time">{apptDetails.time.time}</p>
      </div>
      <div className="card-details">
        <div className="details card-doctor">
          <h5 className="label">Doctor:</h5>
          <p className="doctor-name">{apptDetails.doctor.name}</p>
        </div>
        <div className="details card-location">
          <h5 className="label">Location:</h5>
          <p className="address-town-state">{apptDetails.location.city}</p>
        </div>
      </div>
      <div className="card-btn-group">
        <Button
          fill
          large
          className="primary card-reschedule-btn"
          text="Reschedule"
          onClick={(e) => handleRescheduleClick(e)}
        />
        <Button
          minimal
          fill
          large
          className="secondary card-cancel-btn"
          text="Cancel"
          onClick={() => handleCancelClick(true)}
        />
      </div>
    </CardComp>
  );
}

export default Card;
