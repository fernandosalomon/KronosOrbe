const getCalendarGrid = (month, year) => {
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const daysInPrevMonth = new Date(year, month - 1, 0).getDate();

  const prevMonthDays = Array.from({ length: firstDay }, (_, i) => ({
    day: daysInPrevMonth - firstDay + i + 1,
    current: false,
  }));

  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => ({
    day: i + 1,
    current: true,
  }));

  const totalDays = prevMonthDays.length + currentMonthDays.length;
  const nextMonthDaysCount = totalDays % 7 === 0 ? 0 : 7 - (totalDays % 7);
  const nextMonthDays = Array.from({ length: nextMonthDaysCount }, (_, i) => ({
    day: i + 1,
    current: false,
  }));

  const allDays = [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  const weeks = [];
  for (let i = 0; i < allDays.length; i += 7) {
    weeks.push(allDays.slice(i, i + 7));
  }
  return weeks;
};

export default getCalendarGrid;