function calculateCountdown(startTime) {
  // Parse the start time
  const [startHour, startMinute] = startTime.split(":").map(Number);

  // Get the current date and time
  const currentDate = new Date();

  // Set the target date to today with the specified start time
  let targetDate = new Date(currentDate);
  targetDate.setHours(startHour, startMinute, 0, 0);

  // If the target time is earlier than the current time, set the target to the same time tomorrow
  if (targetDate < currentDate) {
    targetDate.setDate(currentDate.getDate() + 1);
  }

  // Calculate the time difference in milliseconds
  let timeDiff = targetDate - currentDate;

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  timeDiff -= hours * (1000 * 60 * 60);

  const minutes = Math.floor(timeDiff / (1000 * 60));
  timeDiff -= minutes * (1000 * 60);

  const seconds = Math.floor(timeDiff / 1000);

  return `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;
}

export default calculateCountdown;
