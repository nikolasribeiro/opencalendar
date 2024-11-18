import { useState } from "react";
import { getDaysInMonth, getDaysInPreviousMonth } from "../utils/dateUtils";

export const useOpenCalendar = ({
  initialDate = new Date(),
}: {
  initialDate?: Date;
}) => {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    0
  ).getDay();

  const daysInMonth = getDaysInMonth(currentDate);
  const lastDayOfPreviousMonth = getDaysInPreviousMonth(currentDate);

  const daysFromPreviousMonth = Array.from(
    { length: firstDayOfMonth },
    (_, index) => lastDayOfPreviousMonth - firstDayOfMonth + index + 1
  );

  const previousMonthDays = daysFromPreviousMonth.map((day) => (
    <div key={`prev-${day}`} className="calendar-day empty">
      <span className="calendar-date">{day}</span>
    </div>
  ));

  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDay();
  const daysToFill = 7 - lastDayOfMonth;

  const nextMonthDays = Array.from(
    { length: daysToFill },
    (_, index) => index + 1
  );

  const nextMonthDaysRendered = nextMonthDays.map((day) => (
    <div key={`next-${day}`} className="calendar-day empty">
      <span className="calendar-date">{day}</span>
    </div>
  ));

  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const onNavigate = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction === "next" ? 1 : -1));
    setCurrentDate(newDate);
  };

  return {
    previousMonthDays,
    daysInMonth,
    nextMonthDaysRendered,
    monthName,
    year,
    currentDate,
    onNavigate,
    setCurrentDate,
  };
};
