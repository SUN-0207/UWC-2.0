import PropTypes from "prop-types";
import React, { useEffect, useState, createRef } from "react";
import classNames from "classnames";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import { rgbToHex } from "@coreui/utils";
import { DocsLink } from "src/components";
import Kalend, { CalendarView } from "kalend"; // import component
import "kalend/dist/styles/index.css";

// const ThemeView = () => {
//   const [color, setColor] = useState("rgb(255, 255, 255)");
//   const ref = createRef();

//   useEffect(() => {
//     const el = ref.current.parentNode.firstChild;
//     const varColor = window
//       .getComputedStyle(el)
//       .getPropertyValue("background-color");
//     setColor(varColor);
//   }, [ref]);

//   return (
//     <table className="table w-100" ref={ref}>
//       <tbody>
//         <tr>
//           <td className="text-medium-emphasis">HEX:</td>
//           <td className="font-weight-bold">{rgbToHex(color)}</td>
//         </tr>
//         <tr>
//           <td className="text-medium-emphasis">RGB:</td>
//           <td className="font-weight-bold">{color}</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };

// const ThemeColor = ({ className, children }) => {
//   const classes = classNames(className, "theme-color w-75 rounded mb-3");
//   return (
//     <CCol xs={12} sm={6} md={4} xl={2} className="mb-4">
//       <div className={classes} style={{ paddingTop: "75%" }}></div>
//       {children}
//       <ThemeView />
//     </CCol>
//   );
// };

// ThemeColor.propTypes = {
//   children: PropTypes.node,
//   className: PropTypes.string,
// };

const Colors = () => {
  return (
    <>
      <Kalend
        // onEventClick={onEventClick}
        // onNewEventClick={onNewEventClick}
        events={[
          {
            id: 1,
            startAt: "2022-11-25T20:00:00.000Z",
            endAt: "2022-11-27T19:00:00.000Z",
            summary: "test",
            color: "blue",
            calendarID: "work",
          },
          {
            id: 2,
            startAt: "2022-11-25T18:00:00.000Z",
            endAt: "2022-11-27T19:00:00.000Z",
            summary: "test",
            color: "blue",
          },
        ]}
        initialDate={new Date().toISOString()}
        hourHeight={40}
        initialView={CalendarView.WEEK}
        // onSelectView={onSelectView}
        // selectedView={selectedView}
        // onPageChange={onPageChange}
        timeFormat={"24"}
        weekDayStart={"Monday"}
        calendarIDsHidden={["work"]}
        language={"en"}
        isDark={"false"}
        showTimeLine={"true"}
      />
    </>
  );
};

export default Colors;
