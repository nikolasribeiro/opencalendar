import { ComponentProps, JSXElementConstructor, ReactElement } from "react";

export interface CalendarEvent {
  id: string | number;
  date: string;
  title: string;
  color?: string;
}

export interface CalendarHeaderProps extends ComponentProps<"div"> {
  weekDays: string[];
  prevButton?: JSX.Element;
  nextButton?: JSX.Element;
}

export interface CalendarBodyProps extends ComponentProps<"div"> {
  events: CalendarEvent[];
  cellStyle?: ComponentProps<"div">["className"];
  onEventClick?: (event: CalendarEvent) => void;
  onDayClick?: (date: string) => void;
}

export interface CalendarProps extends ComponentProps<"div"> {
  initialDate?: Date;
  events?: CalendarEvent[];
  header: ReactElement<CalendarHeaderProps, JSXElementConstructor<"div">>;
  body: ReactElement<CalendarBodyProps, JSXElementConstructor<"div">>;
}

export interface CalendarDayProps extends ComponentProps<"div"> {
  date: string;
  day: number;
  events?: CalendarEvent[];
  onEventClick: (event: CalendarEvent) => void;
  onDayClick: (date: string) => void;
}
