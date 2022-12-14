import React, { useEffect, useState } from "react";
import uuid from "react-uuid";

import { Tag } from "@blueprintjs/core";

function TimeSlotChart({ setFormData, formData, setSelected, selected }) {
  const [displayedWeek, setDisplayedWeek] = useState([]);
  const [blockedDatesArray, setBlockedDatesArray] = useState([]);

  // Set initial state of displayed week to current week
  useEffect(() => {
    // Get todays date and current week
    let currentDay = new Date();
    let currentWeek = [];
    for (let i = 1; i <= 7; i++) {
      // Start at the first day of the week, push each into currentWeek array
      let day = currentDay.getDate() - currentDay.getDay() + i;
      day = new Date(currentDay.setDate(day)).toISOString();
      currentWeek.push(day);
    }

    setDisplayedWeek(currentWeek);

    // Collect blocked time slots from server
    fetch(`/blocked`).then((r) => {
      if (r.ok) {
        r.json().then((blockedDates) =>
          setBlockedDatesArray({
            data: blockedDates,
            error: null,
            status: "resolved",
          })
        );
      } else {
        r.json().then((err) =>
          setBlockedDatesArray({
            data: null,
            error: err.error,
            status: "rejected",
          })
        );
      }
    });
  }, [formData]);

  // Create arrays for weekdays and hours
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const hours = Array.from({ length: 8 }, (_, i) => i + 9);

  // Set selected slot state and form data dateTime state
  const handleClick = (slotDateTime) => {
    setSelected(slotDateTime);
    setFormData({ ...formData, dateTime: new Date(slotDateTime) });
  };

  // Generate table
  const Table = () =>
    weekDays.map((eachWeekDay, index) =>
      column(eachWeekDay, index, displayedWeek[index])
    );

  // Generate each column
  const column = (eachWeekDay, index, day) => {
    // Create variable for display month in column header
    const displayedMonth = new Date(day).toLocaleString("default", {
      month: "short",
    });

    // Create variable for display day number in column header
    const displayedDayNumber = new Date(day).getDate();

    return (
      <div
        key={uuid()}
        style={{
          gridArea: `1 / ${index + 1} / auto / auto`,
        }}>
        <h3 style={{ marginBottom: "2px" }}>{eachWeekDay}</h3>
        <h4 style={{ margin: "2px" }}>
          {displayedMonth} {displayedDayNumber}
        </h4>
        {hours.map((eachHour) => row(eachHour, day))}
      </div>
    );
  };

  // Generate each row of each column
  const row = (hour, day) => {
    // Set unique date time variable for each time slot
    const slotDateTime = new Date(day).setHours(hour, 0, 0, 0);

    const active = selected === slotDateTime;

    // Determine if the time slot is blocked.
    // If blocked, the button is not interactive
    let interactive = true;
    if (new Date() > slotDateTime) {
      interactive = false;
    }

    // Remove button interactivity if the timeslot with
    // the selected doctor is already reserved as indicated
    // by the data retrieved from the server (/blocked)
    if (blockedDatesArray.data) {
      for (let i = 0; i < blockedDatesArray.data.length; i++) {
        // Check if selected doctor id matches blocked time slot doctor id
        if (blockedDatesArray.data[i][1] === formData.doctor.id) {
          // Check if blocked date matches slotDateTime
          if (
            new Date(blockedDatesArray.data[i][0]).getTime() === slotDateTime
          ) {
            interactive = false;
            break;
          }
        }
      }
    }

    return (
      <div key={uuid()} style={{ margin: "5px" }}>
        <Tag
          key={slotDateTime}
          active={active}
          interactive={interactive}
          large
          round
          fill
          onClick={() => handleClick(slotDateTime)}>
          {hour <= 12 ? hour : hour - 12}:00
        </Tag>
      </div>
    );
  };

  // Render table
  return (
    <div
      style={{
        display: "grid",
        textAlign: "center",
      }}>
      <Table />
    </div>
  );
}

export default TimeSlotChart;
