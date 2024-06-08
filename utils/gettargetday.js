function getTargetDay(dayName) {
    // Days of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    // Create a new Date object for the current day
    const currentDate = new Date();
  
    // Get the day of the week for the current date (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const currentDayOfWeek = currentDate.getDay();
  
    // If the specified day is today, return today's date
    if (dayName === daysOfWeek[currentDayOfWeek]) {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return currentDate.toLocaleDateString('en-US', options);
    }
  
    // Get the index of the specified day name
    const targetDayIndex = daysOfWeek.indexOf(dayName);
    
    // Calculate the difference between the current day and the target day
    let daysToAdd = targetDayIndex - currentDayOfWeek;
    if (daysToAdd <= 0) {
      daysToAdd += 7; // If the target day has already passed this week, move to the next week
    }
    
    // Calculate the date of the upcoming occurrence of the target day
    const upcomingDate = new Date(currentDate);
    upcomingDate.setDate(currentDate.getDate() + daysToAdd);
    
    // Format the date as "Thursday, May 17, 2024"
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedUpcomingDay = upcomingDate.toLocaleDateString('en-US', options);
    
    return formattedUpcomingDay;
  }
  
  export default getTargetDay;
  