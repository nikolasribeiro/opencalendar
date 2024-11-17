import React, { useState } from "react";
import { Header } from "./header";
import { Day } from "./day";
import { getDaysInMonth, formatDate } from "../utils/dateUtils";
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

  const daysInMonth = getDaysInMonth(currentDate);
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
        {daysInMonth.map((day) => {
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
        })}
      </div>
    </div>
  );
};
