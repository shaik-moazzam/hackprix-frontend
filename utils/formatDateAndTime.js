function formatDateAndTime(timestamp) {
    const dateObj = new Date(timestamp);
  
    // Date
    const optionsDate = { month: "short", day: "numeric", year: "numeric" };
    const date = dateObj.toLocaleDateString("en-US", optionsDate);
  
    // Time
    const optionsTime = { hour: "numeric", minute: "numeric", hour12: false };
    const time = dateObj.toLocaleTimeString("en-US", optionsTime);
    const utcDate = new Date(); // Get current date in UTC

    // Parse the time string (HH:mm) and set it to the UTC date
    const [hours, minutes] = time.split(':');
    utcDate.setUTCHours(parseInt(hours, 10));
    utcDate.setUTCMinutes(parseInt(minutes, 10));

    // Convert UTC to local time and return formatted string
    const localTime = utcDate.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // Set to false for 24-hour clock
    });

  
    return { date, localTime };
  }
  
  export default formatDateAndTime;
  