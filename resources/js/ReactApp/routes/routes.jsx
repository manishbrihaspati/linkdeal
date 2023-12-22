import { lazy } from "react";
import CrmManage from "../pages/Dashboard/Integrations/CrmManage";
import AccountSetting from "../pages/Dashboard/Settings/AccountSetting";
import ConnectSetting from "../pages/Dashboard/Settings/ConnectSetting";
import ConnectionList from "../pages/Dashboard/Connections/ConnectionList";
// import App from "../App";
// import Login from "../pages/Auth/Login";
// import ResetPass from "../pages/Auth/ResetPass";
// import Register from "../pages/Auth/Register";
// import Home from "../pages/Dashboard/Home/Home";
// import Calendar from "../pages/Dashboard/Calendars/Calendar";
// import Extension from "../pages/Dashboard/Home/Extension";
const Home = lazy(() => import('../pages/Dashboard/Home/Home'));
const Calendar = lazy(() => import('../pages/Dashboard/Calendars/Calendar'));
const Extension = lazy(() => import('../pages/Dashboard/Home/Extension'));
const Login = lazy(() => import('../pages/Auth/Login'));
const ResetPass = lazy(() => import('../pages/Auth/ResetPass'));
const Register = lazy(() => import('../pages/Auth/Register'));


const routes = [
    {
        path: "/",  
        element: <Home />,
    },
    {
        path: "/calendars",
        element: <Calendar />,
    },
    {
        path: "/integrations",
        element: <CrmManage />,
    },
    {
        path: "/extension",
        element: <Extension />,
    },
    {
        path: "/connections",
        element: <ConnectionList />,
    },
    {
        path: "/account_settings",
        element: <AccountSetting />,
    },
    {
        path: "/connect_settings",
        element: <ConnectSetting />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/forgot_password",
        element: <ResetPass />,
    },
    {
        path: "/register",
        element: <Register />,
    },
];


export default routes;
