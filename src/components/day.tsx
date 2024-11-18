import React from "react";
import { CalendarDayProps } from "../interfaces/calendar";

export const CalendarDay: React.FC<CalendarDayProps> = ({
  date,
  day,
  events,
  onEventClick,
  onDayClick,
  ...props
}) => {
  const today = new Date().toJSON().split("T")[0];

  return (
    <div
      className={`calendar-day ${props.className ? props.className : ""}`}
      onClick={(divEvent) => {
        onDayClick(date);
        divEvent.stopPropagation();
      }}
    >
      {today === date && <div className="today-marker" />}
      <span className={`calendar-date`}>{day}</span>

      {events && (
        <div className="event-container">
          {events.map((event) => {
            if (date === event.date) {
              return (
                <div
                  key={event.id}
                  className="unique-event"
                  onClick={(divEvent) => {
                    onEventClick(event);
                    divEvent.stopPropagation();
                  }}
                >
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
