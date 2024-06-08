function getFormattedDate() {
    // Array of weekday names
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    // Array of month names
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    // Get today's date
    const today = new Date();
  
    // Extract day, month, and year
    const day = weekdays[today.getDay()];
    const month = months[today.getMonth()];
    const date = today.getDate();
    const year = today.getFullYear();
  
    // Format the date string
    const formattedDate = `${day}, ${month} ${date}, ${year}`;
  
    return formattedDate;
  }
  
  // Example usage
  
  export default getFormattedDate