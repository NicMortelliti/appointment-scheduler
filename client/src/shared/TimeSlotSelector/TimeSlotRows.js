import React from "react";

import TimeSlotCell from "./TimeSlotCell";

// Arrays of days and hours
const hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

function TimeSlotRows({ columnNumber, selected, setSelected, date }) {
  return (
    // Display a row for each time slot in grid
    hours.map((hour, index) => {
      return (
        // Only return hour slots from 9am to 4pm.
        // 5 is needed in the array to display
        // ending time for the 4pm time slot.
        index + 1 !== hours.length && (
          <div
            key={index}
            style={{
              gridArea: `${index + 1} / ${columnNumber} / auto / auto`,
              marginBottom: "5px",
            }}>
            {/* Rendering of each time slot button */}
            <TimeSlotCell
              columnNumber={columnNumber}
              startHour={hour}
              endHour={hours[index + 1]}
              selected={selected}
              setSelected={setSelected}
              date={date}
            />
          </div>
        )
      );
    })
  );
}

export default TimeSlotRows;
