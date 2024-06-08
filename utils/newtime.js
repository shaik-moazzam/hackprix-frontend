function newtimeRange(startTime) {
    // Split the input time into hours and minutes
    let [hours, minutes] = startTime.split(':').map(Number);
    
    // Calculate the end time
    let endHours = (hours + 1) % 24;
    let endMinutes = minutes;
    
    // Format hours and minutes to two digits
    let startTimeFormatted = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    let endTimeFormatted = `${endHours.toString().padStart(2, '0')}:${endMinutes.toString().padStart(2, '0')}`;
    
    return `${startTimeFormatted}-${endTimeFormatted}`;
}
export default newtimeRange