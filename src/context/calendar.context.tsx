import { createContext, Dispatch, SetStateAction, useContext } from "react";

type CalendarContextProps = {
  currentDate: Date;
  daysInMonth: {
    day: number;
    date: string;
  }[];
  monthName: string;
  nextMonthDaysRendered: JSX.Element[];
  previousMonthDays: JSX.Element[];
  year: number;
  onNavigate: (direction: "prev" | "next") => void;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
};

export const CalendarContext = createContext({} as CalendarContextProps);

export const useCalendarContext = () => {
  const context = useContext(CalendarContext);

  if (!context) {
    throw new Error(
      "*calendar must be on a client component or a <Calendar/> parent"
    );
  }

  return context;
};
