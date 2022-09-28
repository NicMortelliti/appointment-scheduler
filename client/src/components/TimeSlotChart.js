import React, { useEffect, useState } from "react";

import { Tag } from "@blueprintjs/core";

// Get todays date and current week
let currentDay = new Date();
let currentWeek = [];
for (let i = 1; i <= 7; i++) {
  let first = currentDay.getDate() - currentDay.getDay() + i;
  let day = new Date(currentDay.setDate(first)).toISOString().slice(0, 10);
  currentWeek.push(day);
}

function TimeSlotChart() {
  const [selectedHour, setSelectedHour] = useState(null);
  const [blockedDates, setBlockedDates] = useState([]);
  const [displayedWeek, setDisplayedWeek] = useState(currentWeek);

  // Upon component load, fetch blocked dates from API
  useEffect(() => {
    fetch("/blocked")
      .then((r) => r.json())
      .then((data) => setBlockedDates(data));
  }, []);

  // Arrays of days and hours
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

  // Week switcher
  const weekSwitcher = () => {};

  // Render entire chart
  const RenderChart = () => {
    // Display Column headers in grid
    return weekDays.map((weekDay, index) => {
      const columnNumber = index + 1;

      const date = new Date(displayedWeek[index]);
      const monthWord = date.toLocaleString("default", { month: "short" });
      const dayNumber = date.getDate() + 1;

      return (
        <div
          key={index}
          style={{
            gridArea: `1 / ${columnNumber} / auto / auto`,
            marginLeft: ".5rem",
            marginRight: ".5rem",
          }}>
          <h4 style={{ marginBottom: 0 }}>{weekDay}</h4>
          <h5 style={{ marginTop: 0, marginBottom: "10px" }}>
            {monthWord} {dayNumber}
          </h5>
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
            <SlotButton
              columnNumber={columnNumber}
              startHour={hour}
              endHour={hours[index + 1]}
            />
          </div>
        )
      );
    });
  };

  // Rendering of each time slot button
  const SlotButton = ({ columnNumber, startHour, endHour }) => {
    const buttonID = [columnNumber.columnNumber, startHour].join("");
    return (
      <Tag
        active={selectedHour === buttonID ? true : false}
        interactive
        large
        round
        fill
        // intent="success"
        style={
          selectedHour === buttonID
            ? {
                background: "#8bcdbc",
                color: "#5c255c",
                fontWeight: "bold",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#8bcdbc",
              }
            : {
                background: "none",
                color: "black",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#b5a1a6",
              }
        }
        onClick={(e) => setSelectedHour(buttonID)}>
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
