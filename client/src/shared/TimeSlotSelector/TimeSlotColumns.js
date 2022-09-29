import React, { useState } from "react";

import TimeSlotRows from "./TimeSlotRows";

// Array of weekday names
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function TimeSlotColumns({ week, blockedDates }) {
  const [selectedSlot, setSelectedSlot] = useState(null);

  return weekDays.map((weekDay, index) => {
    // Assign columnNumber based on index + 1
    const columnNumber = index + 1;

    // Set date for Monday of displayed week
    const date = new Date(week[index]);

    // Set short-hand month name as a string (e.g. "Sep")
    const monthWord = date.toLocaleString("default", { month: "short" });

    // Set day number (Need to add one because the array
    // of day numbers begins at 0)
    const dayNumber = date.getDate();

    return (
      <div
        key={index}
        style={{
          gridArea: `1 / ${columnNumber} / auto / auto`,
          marginLeft: ".5rem",
          marginRight: ".5rem",
        }}>
        {/* Display weekday name (e.g. "Monday") */}
        <h4 style={{ marginBottom: 0 }}>{weekDay}</h4>

        {/* Display short date (e.g. "Sep 26") */}
        <h5
          style={{
            marginTop: 0,
            marginBottom: "10px",
            paddingBottom: "10px",
            borderBottom: "solid",
            borderWidth: "1px",
          }}>
          {monthWord} {dayNumber}
        </h5>

        {/* Render time slot rows for each day */}
        <TimeSlotRows
          columnNumber={columnNumber}
          selected={selectedSlot}
          setSelected={setSelectedSlot}
          date={date}
          blockedDates={blockedDates}
        />
      </div>
    );
  });
}

export default TimeSlotColumns;
