import React from "react";
import Kalend, { CalendarView } from "kalend"; // import component
import "kalend/dist/styles/index.css";

const Calendar = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Kalend
        events={[
          {
            id: 1,
            startAt: "2022-12-01T17:00:00.000Z",
            endAt: "2022-12-01T20:00:00.000Z",
            summary: "test",
            color: "blue",
            calendarID: "work",
          },
          {
            id: 2,
            startAt: "2022-12-01T19:00:00.000Z",
            endAt: "2022-12-01T20:00:00.000Z",
            summary: "hello",
            color: "green",
          },
          {
            id: 3,
            startAt: "2022-12-02T17:00:00.000Z",
            endAt: "2022-12-02T20:00:00.000Z",
            summary: "test",
            color: "red",
            calendarID: "work",
          },
        ]}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={"24"}
        weekDayStart={"Monday"}
        calendarIDsHidden={["work"]}
        language={"en"}
        isDark={"false"}
        showTimeLine={"true"}
      />
    </div>
  );
};

export default Calendar;
