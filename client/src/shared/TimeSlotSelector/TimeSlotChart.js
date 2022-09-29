import React, { useEffect, useState } from "react";

import TimeSlotColumns from "./TimeSlotColumns";

// Get todays date and current week
let currentDay = new Date();
let currentWeek = [];
for (let i = 1; i <= 7; i++) {
  let first = currentDay.getDate() - currentDay.getDay() + i;
  let day = new Date(currentDay.setDate(first)).toISOString().slice(0, 10);
  currentWeek.push(day);
}

function TimeSlotChart() {
  const [blockedDates, setBlockedDates] = useState([]);
  const [displayedWeek, setDisplayedWeek] = useState(currentWeek);

  // Upon component load, fetch blocked dates from API
  useEffect(() => {
    fetch("/blocked")
      .then((r) => r.json())
      .then((data) => setBlockedDates(data));
  }, []);

  return (
    <div
      style={{
        display: "grid",
        textAlign: "center",
      }}>
      <TimeSlotColumns week={displayedWeek} />
    </div>
  );
}

export default TimeSlotChart;
