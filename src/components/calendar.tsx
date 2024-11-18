import "../styles.css";
import { CalendarProps } from "../interfaces/calendar";
import { CalendarContext } from "../context/calendar.context";
import { useOpenCalendar } from "../hooks/use-open-calendar";

export const Calendar = ({
  initialDate = new Date(),
  header,
  body,
  ...props
}: CalendarProps) => {
  const {
    currentDate,
    daysInMonth,
    monthName,
    nextMonthDaysRendered,
    previousMonthDays,
    year,
    onNavigate,
    setCurrentDate,
  } = useOpenCalendar({ initialDate });

  return (
    <CalendarContext.Provider
      value={{
        currentDate,
        daysInMonth,
        monthName,
        nextMonthDaysRendered,
        previousMonthDays,
        year,
        onNavigate,
        setCurrentDate,
      }}
    >
      <div
        {...props}
        className={`calendar-container ${
          props.className ? props.className : ""
        }`}
      >
        <div className="calendar">
          {header}
          {body}
        </div>
      </div>
    </CalendarContext.Provider>
  );
};
