import React, { useState } from "react";

import { Tag } from "@blueprintjs/core";

function TimeSlotChart() {
  const [selectedHour, setSelectedHour] = useState(null);

  // Arrays of days and hours
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

  // Render entire chart
  const RenderChart = () => {
    // Display Column headers in grid
    return weekDays.map((weekDay, index) => {
      const columnNumber = index + 1;
      return (
        <div
          key={index}
          style={{
            gridArea: `1 / ${columnNumber} / auto / auto`,
            marginLeft: ".5rem",
            marginRight: ".5rem",
          }}>
          <h4>{weekDay}</h4>
          <RenderRows columnNumber={columnNumber} />
        </div>
      );
    });
  };

  // Rendering of each time slot row
  const RenderRows = (columnNumber) => {
    // Display a row for each time slot in grid
    return hours.map((hour, index) => {
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
            <SlotButton startHour={hour} endHour={hours[index + 1]} />
          </div>
        )
      );
    });
  };

  // Rendering of each time slot button
  const SlotButton = ({ startHour, endHour }) => {
    return (
      <Tag
        interactive
        large
        round
        fill
        style={{
          background: "#5c255c",
          fontWeight: "bold",
        }}
        onClick={(e) => setSelectedHour(startHour)}>
        {`${startHour}:00 - ${endHour}:00`}
      </Tag>
    );
  };

  return (
    <div
      style={{
        display: "grid",
        textAlign: "center",
      }}>
      <RenderChart />
    </div>
  );
}

export default TimeSlotChart;
