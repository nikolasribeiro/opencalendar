import { useCalendarContext } from "../context/calendar.context";
import { CalendarBodyProps } from "../interfaces/calendar";
import { CalendarDay } from "./day";

export const CalendarBody: React.FC<CalendarBodyProps> = ({
  events,
  cellStyle,
  onEventClick,
  onDayClick,
  ...props
}) => {
  const { previousMonthDays, daysInMonth, nextMonthDaysRendered } =
    useCalendarContext();

  return (
    <div
      {...props}
      className={`calendar-days ${props.className ? props.className : ""}`}
    >
      {[
        ...previousMonthDays,
        ...daysInMonth.map((day) => {
          return (
            <CalendarDay
              key={day.date}
              date={day.date}
              day={day.day}
              events={events}
              onEventClick={(event) => onEventClick && onEventClick(event)}
              onDayClick={(date) => onDayClick && onDayClick(date)}
              className={cellStyle}
            />
          );
        }),
        ...nextMonthDaysRendered,
      ]}
    </div>
  );
};
