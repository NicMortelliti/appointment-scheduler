import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="date">
        <p className="month">SEP</p>
        <h1 className="day">10</h1>
        <p className="time">12:30 PM</p>
      </div>
      <div className="details">
        <div className="doctor-details">
          <h5 className="label">Doctor:</h5>
          <p className="doctor-name">Dr. Firstname Lastname</p>
        </div>
        <div className="location-details">
          <h6 className="label">Location:</h6>
          <p className="address-street">15270 SW Holly Hill Rd</p>
          <p className="address-town-state">Hillsboro, OR 97123</p>
        </div>
      </div>
      <div className="card-btn-group">
        <button className="card-btn">Reschedule</button>
        <button className="card-btn cancel">Cancel</button>
      </div>
    </div>
  );
}

export default Card;
