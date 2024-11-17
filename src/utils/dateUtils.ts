export const getDaysInMonth = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const days = new Date(year, month + 1, 0).getDate();

  const result = [];
  for (let day = 1; day <= days; day++) {
    result.push({
      day,
      date: formatDate(date, day),
    });
  }

  return result;
};

export const formatDate = (date: Date, day: number) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const dayString = String(day).padStart(2, "0");
  return `${year}-${month}-${dayString}`;
};

export const getDaysInPreviousMonth = (currentDate: Date) => {
  const previousMonthDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  );
  return previousMonthDate.getDate();
};
