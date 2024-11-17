import React, { useState } from "react";
import { Header } from "./header";
import { Day } from "./day";
import {
  getDaysInMonth,
  formatDate,
  getDaysInPreviousMonth,
} from "../utils/dateUtils";
import "../styles.css";

type Event = {
  date: string;
  name: string;
};

interface CalendarProps {
  initialDate?: Date;
  events?: Event[];
  onEventClick?: (event: Event) => void;
  onDayClick?: (date: string) => void;
}

export const Calendar: React.FC<CalendarProps> = ({
  initialDate = new Date(),
  events = [],
  onEventClick,
  onDayClick,
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

  const navigate = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + (direction === "next" ? 1 : -1));
    setCurrentDate(newDate);
  };

  const handleDayClick = (day: number) => {
    const date = formatDate(currentDate, day);
    if (onDayClick) onDayClick(date);
  };

  return (
    <div className="calendar">
      <Header month={monthName} year={year} onNavigate={navigate} />
      <div className="calendar-days">
        {[
          ...previousMonthDays,
          ...daysInMonth.map((day) => {
            const event = events.find((e) => e.date === day.date);
            return (
              <Day
                key={day.date}
                date={day.date}
                day={day.day}
                event={event}
                onClick={() =>
                  event
                    ? onEventClick && onEventClick(event)
                    : handleDayClick(day.day)
                }
              />
            );
          }),
          ...nextMonthDaysRendered,
        ]}
      </div>
    </div>
  );
};
