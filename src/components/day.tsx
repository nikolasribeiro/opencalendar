import React from "react";
import { Event } from "../interfaces/calendar";

interface DayProps {
  date: string;
  day: number;
  events?: Event[];
  onClick: () => void;
}

export const Day: React.FC<DayProps> = ({ date, day, events, onClick }) => {
  return (
    <div className={`calendar-day`} onClick={onClick}>
      <span className="calendar-date">{day}</span>

      {events && (
        <div className="event-container">
          {events.map((event) => {
            if (date === event.date) {
              return (
                <div key={event.id} className="unique-event">
                  <div
                    style={{
                      width: ".5rem",
                      height: ".5rem",
                      backgroundColor: event.color,
                      borderRadius: "100%",
                    }}
                  />
                  <small className="event">{event.title}</small>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};
