function convertToUserLocalTime(time) {
    const utcDate = new Date(); // Get current date in UTC

    // Parse the time string (HH:mm) and set it to the UTC date
    const [hours, minutes] = time?.split(':');
    utcDate.setUTCHours(parseInt(hours, 10));
    utcDate.setUTCMinutes(parseInt(minutes, 10));

    // Convert UTC to local time and return formatted string
    const localTime = utcDate.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // Set to false for 24-hour clock
    });

    // Calculate the end time by adding an hour
    const endUtcDate = new Date(utcDate.getTime() + 60 * 60 * 1000);
    const endTime = endUtcDate.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    return `${localTime}`;
  }
  export default convertToUserLocalTime
  // Example usage:
  