export interface Event {
  id: string;
  date: string;
  title: string;
  color?: string;
}

export interface CalendarProps {
  initialDate?: Date;
  events?: Event[];
  onEventClick?: (event: Event) => void;
  onDayClick?: (date: string) => void;
}
