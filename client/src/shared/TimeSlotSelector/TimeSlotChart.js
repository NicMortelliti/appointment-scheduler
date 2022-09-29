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

function TimeSlotChart({ doctorId, setFormData, formData }) {
  const [allBlockedDates, setAllBlockedDates] = useState([]);
  const [doctorBlockedDates, setDoctorBlockedDates] = useState([]);
  const [displayedWeek, setDisplayedWeek] = useState(currentWeek);

  // Upon component load, fetch blocked dates from API
  useEffect(() => {
    fetch("/blocked")
      .then((r) => r.json())
      .then((data) => setAllBlockedDates(data));
  }, []);

  // Filter blocked dates down to selected doctor
  useEffect(() => {
    // Filter function comparing selected doctor ID to each blockedDate doctor ID
    // Push matches into local array variable
    const doctorsBlockedDates = allBlockedDates.filter(
      (eachDate) => eachDate[1] === doctorId
    );

    // setDoctorBlockedDates to value of local variable
    setDoctorBlockedDates(doctorsBlockedDates);
  }, [allBlockedDates, doctorId]);

  return (
    <div
      style={{
        display: "grid",
        textAlign: "center",
      }}>
      <TimeSlotColumns week={displayedWeek} blockedDates={doctorBlockedDates} />
    </div>
  );
}

export default TimeSlotChart;
