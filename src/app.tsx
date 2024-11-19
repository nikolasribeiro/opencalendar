import React from "react";
import { OpenCalendar } from "./components/calendar";
import { CalendarEvent } from "./interfaces/calendar";
import { CalendarHeader } from "./components/header";
import { CalendarBody } from "./components/body";

const App: React.FC = () => {
  const demoEvents: CalendarEvent[] = [
    { id: "1", date: "2023-11-15", title: "Reunión", color: "#28a745" },
    {
      id: "2",
      date: "2024-11-20",
      title: "Entrega del proyecto",
      color: "#d80707",
    },
    {
      id: "4",
      date: "2024-11-20",
      title: "Entrega de codigo",
      color: "#079dd8",
    },
    {
      id: "5",
      date: "2024-11-20",
      title: "Otro Evento",
      color: "#1fd807",
    },
    {
      id: "6",
      date: "2024-11-20",
      title: "Otra entrega de codigo",
      color: "#ffc123",
    },
    {
      id: "7",
      date: "2024-11-20",
      title: "Otro Evento 5",
      color: "#1fd807",
    },
    {
      id: "8",
      date: "2024-11-20",
      title: "Otra entrega de codigo ya no se que mas poner",
      color: "#ffc123",
    },
    { id: "3", date: "2024-11-25", title: "Cumpleaños", color: "#dc3545" },
  ];

  const weekDays = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];

  return (
    <div style={{ height: "95vh" }}>
      <OpenCalendar
        header={<CalendarHeader weekDays={weekDays} />}
        body={
          <CalendarBody
            events={demoEvents}
            onEventClick={(event) => alert(JSON.stringify(event, null, 2))}
            onDayClick={(date) => alert(date)}
          />
        }
      />
    </div>
  );
};

export default App;
