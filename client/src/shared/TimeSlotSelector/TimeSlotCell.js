import React from "react";

import { Tag } from "@blueprintjs/core";

function TimeSlotCell({
  columnNumber,
  startHour,
  endHour,
  selected,
  setSelected,
  date,
  blockedDates,
}) {
  return <p>timeslotcell</p>;
}

//   // const buttonID = [date, startHour].join("");
//   let newDate = date;
//   let slotDateTime = date.getDate();
//   newDate.setDate(slotDateTime);
//   newDate = newDate.setHours(startHour);
//   newDate = new Date(newDate);
//
//   // Function to convert start/end hours to 12-hour
//   // format for display.
//   const convertToTwelveHourFormat = (hour) => (hour <= 12 ? hour : hour - 12);
//   const startHourTwelveHrFormat = convertToTwelveHourFormat(startHour);
//   const endHourTwelveHrFormat = convertToTwelveHourFormat(endHour);
//
//   const selectedStyle = {
//     background: "#8bcdbc",
//     color: "#5c255c",
//     fontWeight: "bold",
//     borderStyle: "solid",
//     borderWidth: "1px",
//     borderColor: "#8bcdbc",
//   };
//
//   const noStyle = {
//     background: "none",
//     color: "black",
//     borderStyle: "solid",
//     borderWidth: "1px",
//     borderColor: "#b5a1a6",
//   };
//
//   return (
//     <Tag
//       active={selected === newDate ? true : false}
//       interactive
//       large
//       round
//       fill
//       style={selected === newDate ? selectedStyle : noStyle}
//       onClick={() => setSelected(newDate)}>
//       {`${startHourTwelveHrFormat}:00 - ${endHourTwelveHrFormat}:00`}
//     </Tag>
//   );
// }

export default TimeSlotCell;
