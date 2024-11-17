import React from "react";

interface DayProps {
  date: string;
  day: number;
  event?: { name: string };
  onClick: () => void;
}

export const Day: React.FC<DayProps> = ({ date, day, event, onClick }) => {
  return (
    <div className={`calendar-day ${event ? "event" : ""}`} onClick={onClick}>
      <span className="calendar-date">{day}</span>
      {event && <small>{event.name}</small>}
    </div>
  );
};
