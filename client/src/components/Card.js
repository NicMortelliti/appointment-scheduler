import React from "react";
import { Button, Card as CardComp } from "@blueprintjs/core";
import { Link } from "react-router-dom";

function Card({ details, setCancelOpen, setApptDetails }) {
  const apptDetails = {
    id: 1,
    date: new Date("09/12/2022"),
    time: { id: 3, time: "12:30 PM" },
    doctor: { id: 2, name: "Joe Moe" },
    location: { id: 5, city: "Hillsboro" },
  };

  const handleRescheduleClick = (e) => {
    e.preventDefault();
    setApptDetails(apptDetails);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setCancelOpen(true);
    setApptDetails(apptDetails);
  };

  // The datetime object from rails gets converted
  // to a string when fetched by React. We need to
  // turn it into a date object.
  const apptDate = new Date(details.start);
  const month = apptDate.toLocaleString("default", { month: "long" });
  const date = apptDate.getDate() + 1;
  let hours = apptDate.getHours();
  const amPM = hours < 12 ? "AM" : "PM";
  if (hours > 12) {
    hours = hours - 12;
  }
  let minutes = apptDate.getMinutes();
  if (minutes < 10) {
    // suffix '0' if less than 10 minutes
    minutes = "0" + minutes;
  }
  const time = `${hours}:${minutes} ${amPM}`;

  return (
    <CardComp className="card">
      <div className="card-date">
        <p className="month">{month}</p>
        <h1 className="day">{date}</h1>
        <p className="time">{time}</p>
      </div>
      <div className="card-details">
        <div className="details card-doctor">
          <h5 className="label">Doctor:</h5>
          <p className="doctor-name">
            {details.doctor.title}
            {details.doctor.first_name} {details.doctor.last_name}
          </p>
        </div>
      </div>
      <div className="card-btn-group">
        <Link to="/edit_appointment">
          <Button
            fill
            large
            className="primary card-reschedule-btn"
            text="Reschedule"
            onClick={() => setApptDetails(details)}
          />
        </Link>
        <Button
          minimal
          fill
          large
          className="secondary card-cancel-btn"
          text="Cancel"
          onClick={(e) => handleCancelClick(e)}
        />
      </div>
    </CardComp>
  );
}

export default Card;
