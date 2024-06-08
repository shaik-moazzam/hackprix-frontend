// const ConvertToLocale = (time) => {
//     const utcDate = new Date(); // Get current date in UTC

//     // Parse the time string (HH:mm) and set it to the UTC date
//     const [hours, minutes] = time.split(':');
//     utcDate.setUTCHours(parseInt(hours, 10));
//     utcDate.setUTCMinutes(parseInt(minutes, 10));

//     // Convert UTC to local time and return formatted string
   
//     const timestamp = utcDate.toLocaleString();
//     const splitted = timestamp.split(', ')
//     const timewithSecond = splitted[1];
//     const finalTime = timewithSecond.split(":");
//     const resultTime = `${finalTime[0]}:${finalTime[1]} - ${finalTime[0]}:${finalTime[1]}`
//     return resultTime
// }


// const ConvertToLocale = (time) => {
//     const utcDate = new Date(); // Get current date in UTC

//     // Parse the time string (HH:mm) and set it to the UTC date
//     const [hours, minutes] = time.split(':');
//     utcDate.setUTCHours(parseInt(hours, 10));
//     utcDate.setUTCMinutes(parseInt(minutes, 10));

//     // Convert UTC to local time and return formatted string
//     const options = {
//         hour: '2-digit',
//         minute: '2-digit',
//         hour12: false // Set to false for 24-hour clock
//     };
//     return utcDate.toLocaleTimeString(undefined, options);
// }



const ConvertToLocale = (time) => {
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

    // Calculate the end time by adding an hour
    const endUtcDate = new Date(utcDate.getTime() + 60 * 60 * 1000);
    const endTime = endUtcDate.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    // Concatenate the start and end times with a separator
    return `${localTime} to ${endTime}`;
}

export default ConvertToLocale;


