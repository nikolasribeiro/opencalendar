# OpenCalendar

A fully responsive and customizable calendar for your React projects. Perfect for managing events, highlighting specific days, and providing a user-friendly experience on any device.

---

## 🚀 Features

- **Full Customization**: Add your own styles and custom buttons.
- **Event Management**: Display events and highlight important dates.
- **Responsive Design**: Adaptable to any screen size.
- **Navigation Support**: Navigate between months with ease.
- **Lightweight and Fast**: Optimized for performance in React projects.

---

## 📦 Installation

Install the package using npm or yarn:

```bash
npm install opencalendar
# or
yarn add opencalendar
```

---

## 🖥️ Basic Usage

```tsx
import React from "react";
import { Calendar } from "my-react-calendar";

const App = () => {
  const demoEvents = [
    { id: "1", date: "2023-11-15", title: "Meeting", color: "#28a745" },
    {
      id: "2",
      date: "2023-11-20",
      title: "Project Deadline",
      color: "#ffc107",
    },
    { id: "3", date: "2023-11-25", title: "Birthday", color: "#dc3545" },
  ];

  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div>
      <h1>OpenCalendar</h1>
      <div style={{ height: "95vh" }}>
        <Calendar
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
    </div>
  );
};

export default App;
```

---

## 🛠️ Props

### Calendar Props

| Prop           | Type                                | Default      | Description                                         |
| -------------- | ----------------------------------- | ------------ | --------------------------------------------------- |
| `initialDate`  | `Date`                              | `new Date()` | The starting date for the calendar.                 |
| `events`       | `Array<{ id, date, title, color }>` | `[]`         | List of events to display on the calendar.          |
| `onEventClick` | `(event: Event) => void`            | `undefined`  | Callback triggered when clicking on an event.       |
| `onDayClick`   | `(date: string) => void`            | `undefined`  | Callback triggered when clicking on a specific day. |

---

## 🎨 Customization

You can provide your own navigation buttons and day styles:

```tsx
<Calendar
  prevButton={<button style={{ color: "red" }}>Custom ←</button>}
  nextButton={<button style={{ color: "blue" }}>Custom →</button>}
/>
```
