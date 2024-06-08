function getTimeRanges() {
    // Get the current date
    var currentDate = new Date();

    // Get the user's time zone
    var userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Get the offset of the user's time zone from UTC in minutes
    var userOffset = currentDate.getTimezoneOffset();

    // Convert the user's time zone offset to milliseconds
    var userOffsetMilliseconds = userOffset * 60 * 1000;

    // Get the offset of the global time zone (e.g., UTC) from UTC in minutes
    var globalOffset = 0; // This can be adjusted for different global time zones

    // Convert the global time zone offset to milliseconds
    var globalOffsetMilliseconds = globalOffset * 60 * 1000;

    // Calculate the time zone difference in milliseconds
    var timeZoneDifferenceMilliseconds =
      userOffsetMilliseconds - globalOffsetMilliseconds;

    // Convert the time zone difference to hours
    var timeZoneDifferenceHours =
      timeZoneDifferenceMilliseconds / (1000 * 60 * 60);

    // Check if the time zone difference is a whole number
    if (timeZoneDifferenceHours % 1 === 0) {
      // If it's a whole number, return the original time ranges
      return [
        { startTime: "08:00", endTime: "12:00" },
        { startTime: "12:00", endTime: "16:00" },
        { startTime: "16:00", endTime: "22:00" },
      ];
    } else {
      // If it's not a whole number, adjust the time ranges by adding 30 minutes
      return [
        { startTime: "08:30", endTime: "12:30" },
        { startTime: "12:30", endTime: "16:30" },
        { startTime: "16:30", endTime: "22:30" },
      ];
    }
  }


  export default getTimeRanges