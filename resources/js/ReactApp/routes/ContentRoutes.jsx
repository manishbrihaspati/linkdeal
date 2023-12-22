import React from "react";
import routes from "./routes";
import { Route, Routes } from "react-router-dom";
import Calendar from "../pages/Dashboard/Calendars/Calendar";

const ContentRoutes = () => {
    return (
        <Routes>
            {routes.map((item) => (
                <Route
                    key={item.path}
                    path={item.path}
                    exact
                    element={item.element}
                />
            ))}
        </Routes>
    );
};

export default ContentRoutes;
