import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Vehicle = React.lazy(() => import("./views/pages/BO/Vehicle"));
const ListEmployee = React.lazy(() => import("./views/pages/BO/ListEmployee"));
const MCP = React.lazy(() => import("./views/pages/BO/Mcp"));
const Calendar = React.lazy(() => import("./views/calendar/Calendar"));
const Home = React.lazy(() => import("./views/home/StartPage"));
const Chat = React.lazy(() => import("./views/chat/Chat"));

const routes = [
  { path: "/home", exact: true, name: "", element: Home },
  { path: "/workcalendar", name: "Trang chủ", element: Dashboard },
  { path: "/vehicle", name: "Thông tin phương tiện", element: Vehicle },
  { path: "/mcp", name: "Thông tin MCPs", element: MCP },
  { path: "/calendar", name: "Lịch trình", element: Calendar },
  { path: "/Info", name: "Thông tin nhân viên", element: ListEmployee },
  { path: "/chat", name: "Trò chuyện", element: Chat },
];

export default routes;
