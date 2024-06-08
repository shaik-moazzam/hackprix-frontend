function gettimerangeforshedule(start, end) {
    const startTime = new Date(`2000-01-01T${start}:00`);
    const endTime = new Date(`2000-01-01T${end}:00`);

    // Calculate one hour before start time
    const beforeStartTime = new Date(startTime.getTime());
    beforeStartTime.setHours(beforeStartTime.getHours() - 1);

    // Calculate one hour after end time
    const afterEndTime = new Date(endTime.getTime());
    afterEndTime.setHours(afterEndTime.getHours() + 1);

    const timeIncrements = [];

    // Increment current time until it reaches after end time
    let currentTime = new Date(beforeStartTime.getTime());
    while (currentTime <= afterEndTime) {
        // Format the current time
        const formattedTime = currentTime.toLocaleTimeString('en-US', {hour12: false, hour: '2-digit', minute: '2-digit'});
        // Add formatted time to the array
        timeIncrements.push(formattedTime);
        // Increment current time by 1 hour
        currentTime.setHours(currentTime.getHours() + 1);
    }

    return timeIncrements;
}

export default gettimerangeforshedule;
