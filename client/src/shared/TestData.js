export const doctors = [
  { id: 1, name: "Jean-Martin Charcot" },
  { id: 2, name: "John Down" },
];

export const locations = [
  { id: 1, city: "Lake Oswego" },
  { id: 2, city: "Wilsonville" },
  { id: 3, city: "Tigard" },
  { id: 4, city: "Portland" },
  { id: 5, city: "Hillsboro" },
];

const month = 10;
const startingDay = 1;
const year = 2022;

export const dates = [
  new Date(`${month}/${startingDay}/${year}`),
  new Date(`${month}/${startingDay + 1}/${year}`),
  new Date(`${month}/${startingDay + 2}/${year}`),
  new Date(`${month}/${startingDay + 3}/${year}`),
  new Date(`${month}/${startingDay + 4}/${year}`),
];

export const times = [
  { id: 1, hour: 11, minute: 0, label: "11:00 AM" },
  { id: 2, hour: 14, minute: 0, label: "2:00 PM" },
];
