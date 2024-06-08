function convertToUTC(startTime, endTime) {
    // Get the current date
    var currentDate = new Date();

    // Get the offset of the user's time zone from UTC in minutes
    var userOffset = currentDate.getTimezoneOffset();

    // Split the start time and end time
    var startTimeParts = startTime.split(":").map(Number);
    var endTimeParts = endTime.split(":").map(Number);

    // Convert start time to UTC
    var startTimeUTC = new Date(currentDate);
    startTimeUTC.setUTCHours(startTimeParts[0]);
    startTimeUTC.setUTCMinutes(startTimeParts[1] + userOffset); // Adjust for user's time zone

    // Convert end time to UTC
    var endTimeUTC = new Date(currentDate);
    endTimeUTC.setUTCHours(endTimeParts[0]);
    endTimeUTC.setUTCMinutes(endTimeParts[1] + userOffset); // Adjust for user's time zone

    // Format the times as strings
    var startTimeUTCString = startTimeUTC.toUTCString().substr(17, 5);
    var endTimeUTCString = endTimeUTC.toUTCString().substr(17, 5);

    // Return the converted UTC times
    return { startTimeUTC: startTimeUTCString, endTimeUTC: endTimeUTCString };
  }

  export default convertToUTC