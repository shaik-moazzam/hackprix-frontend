function hasDatePassed(dateString) {
    // Convert the date string to a JavaScript Date object
    const date = new Date(dateString);
  
    // Get the current date
    const currentDate = new Date();
  
    // Check if the given date is in the past
    return date < currentDate;
  }
  
  export default hasDatePassed
  