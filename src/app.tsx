import React from "react";
import { Calendar } from "./components/calendar";
import { Event } from "./interfaces/calendar";

const App: React.FC = () => {
  const demoEvents: Event[] = [
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
    { id: "3", date: "2024-11-25", title: "Cumpleaños", color: "#dc3545" },
  ];

  return (
    <div style={{ height: "95vh" }}>
      <Calendar events={demoEvents} />;
    </div>
  );
};

export default App;
