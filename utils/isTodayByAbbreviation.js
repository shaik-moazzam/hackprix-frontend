function isTodayByAbbreviation(dayName) {
  // Create an array of day abbreviations
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the current day of the week (0 for Sunday, 1 for Monday, etc.)
  const currentDayIndex = new Date().getDay();

  // Get the day name of the current day
  const currentDayName = daysOfWeek[currentDayIndex];

  // Compare the given day name with the current day name
  return dayName === currentDayName;
}
export default isTodayByAbbreviation;
