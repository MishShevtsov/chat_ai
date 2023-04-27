export const getCurrentDateFormatted = (date: Date) => {
    // const currentDate = new Date();
    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const monthsOfYear = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = String(date.getDate());
    const month = monthsOfYear[date.getMonth()];
    const year = date.getFullYear();
    const formattedDate = `${dayOfWeek} ${dayOfMonth} ${month} ${year}`;
    return formattedDate;
};