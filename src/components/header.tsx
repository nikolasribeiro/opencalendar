import React from "react";
import { CalendarHeaderProps } from "../interfaces/calendar";
import { v4 as uuid } from "uuid";
import { useCalendarContext } from "../context/calendar.context";

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  weekDays,
  nextButton,
  prevButton,
  ...props
}) => {
  const { onNavigate, monthName, year } = useCalendarContext();

  const getClonedButton = (
    button: React.ReactElement | undefined,
    direction: "prev" | "next"
  ) => {
    if (button) {
      return React.cloneElement(button, {
        onClick: () => {
          onNavigate(direction);
          if (button.props.onClick) button.props.onClick();
        },
      });
    }
    return (
      <button onClick={() => onNavigate(direction)}>
        {direction === "prev" ? "←" : "→"}
      </button>
    );
  };

  return (
    <>
      <div
        className={`calendar-header ${props.className ? props.className : ""}`}
      >
        {getClonedButton(prevButton, "prev")}
        <span>{`${monthName} ${year}`}</span>
        {getClonedButton(nextButton, "next")}
      </div>
      <div className="days-of-the-week">
        {weekDays.map((weekDay) => (
          <span key={uuid()}>
            <p>{weekDay}</p>
          </span>
        ))}
      </div>
    </>
  );
};
