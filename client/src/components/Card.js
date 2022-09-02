import React from "react";

function Card() {
  return (
    <div className="card-grid-container">
      <div className="card-date">
        <p className="month">SEP</p>
        <h1 className="day">10</h1>
        <p className="time">12:30 PM</p>
      </div>
      <div className="card-details">
        <div className="details card-doctor">
          <h5 className="label">Doctor:</h5>
          <p className="doctor-name">Dr. Firstname Lastname</p>
        </div>
        <div className="details card-location">
          <h5 className="label">Location:</h5>
          <p className="address-street">15270 SW Holly Hill Rd</p>
          <p className="address-town-state">Hillsboro, OR 97123</p>
        </div>
      </div>
      <div className="card-reschedule-btn">
        <button className="primary">Reschedule</button>
      </div>
      <div className="card-cancel-btn">
        <button className="secondary">Cancel Appointment</button>
      </div>
    </div>
  );
}

export default Card;
