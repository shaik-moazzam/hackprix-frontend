function calculateCountdown(targetDay, startTime) {
    // Parse the target day
    const targetDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    let targetDayIndex = targetDays.indexOf(targetDay);
    
    // If the target day is before today, add 7 days to get the next occurrence
    if (targetDayIndex < today) {
      targetDayIndex += 7;
    }
    
    const daysUntilTarget = targetDayIndex - today;
    
    // Parse the start time
    const [startHour, startMinute] = startTime.split(':').map(Number);
    
    // Get the current date
    const currentDate = new Date();
    
    // Set the target date
    const targetDate = new Date(currentDate);
    targetDate.setDate(currentDate.getDate() + daysUntilTarget);
    targetDate.setHours(startHour, startMinute, 0, 0);
    
    // Calculate the time difference in milliseconds
    let timeDiff = targetDate - currentDate;
    
    if (timeDiff < 0) {
      return 'Countdown has ended';
    }
  
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    timeDiff -= days * (1000 * 60 * 60 * 24);
    
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    timeDiff -= hours * (1000 * 60 * 60);
    
    const minutes = Math.floor(timeDiff / (1000 * 60));
    timeDiff -= minutes * (1000 * 60);
    
    const seconds = Math.floor(timeDiff / 1000);
    
    return `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;
  }
  
  export default  calculateCountdown

  