import React, { useEffect, useState } from "react";

import { Tag } from "@blueprintjs/core";

function TimeSlotChart({ doctorId, setFormData, formData }) {
  const [selectedSlot, setSelectedSlot] = useState(new Date());
  const [displayedWeek, setDisplayedWeek] = useState([]);

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
  }, []);

  // Create arrays for weekdays and hours
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const hours = Array.from({ length: 8 }, (_, i) => i + 9);

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
        style={{
          gridArea: `1 / ${index + 1} / auto / auto`,
        }}>
        <h3>{eachWeekDay}</h3>
        <h4>
          {displayedMonth} {displayedDayNumber}
        </h4>
        {hours.map((eachHour) => row(eachHour, day))}
      </div>
    );
  };

  // Generate each row of each column
  const row = (eachHour, day) => {
    // Set unique date time variable for each time slot
    const slotDateTime = new Date(day).setHours(eachHour, 0, 0, 0);

    return (
      <div>
        <Tag
          interactive
          large
          round
          fill
          onClick={(e) =>
            setFormData({ ...formData, dateTime: new Date(slotDateTime) })
          }>
          {eachHour <= 12 ? eachHour : eachHour - 12}:00
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
