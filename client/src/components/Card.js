import React from "react";
import { Button, ButtonGroup, Card as CardComp } from "@blueprintjs/core";

function Card() {
  return (
    <CardComp className="bp4-elevation-3 card">
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
      <ButtonGroup vertical className="card-btn-group">
        <Button
          intent="primary"
          large
          className="card-reschedule-btn"
          text="Reschedule"
        />
        <Button
          intent="danger"
          minimal
          large
          className="card-cancel-btn"
          text="Cancel"
        />
      </ButtonGroup>
    </CardComp>
  );
}

export default Card;
