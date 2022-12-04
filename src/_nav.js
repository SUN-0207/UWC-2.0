import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilCalendar,
  cilTruck,
  cilPeople,
  cilCart,
  cilInfo,
  cilMap,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Trang chủ",
    to: "/workcalendar",
    icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    component: CNavTitle,
    name: "Quản lý",
  },
  {
    component: CNavItem,
    name: "Lịch trình",
    to: "/calendar",
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: "Quản lý thông tin",
    to: "/buttons",
    icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Thông tin nhân viên",
        to: "/Info",
        icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "Thông tin phương tiện",
        to: "/vehicle",
        icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "Thông tin MCPs",
        to: "/mcp",
        icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
      },
    ],
  },
];

export default _nav;
