// LayoutWrapper.js
import React, { Suspense, useEffect, startTransition, useState } from "react";
import Header from "../../components/Layout/Header";
import ContentRoutes from "../../routes/ContentRoutes";

// import Header from "../../components/Layout/Header";
import Sidebar from "../../components/Layout/Sidebar";
import ContentArea from "./ContentArea";
import { LinearProgress } from "@mui/joy";
// import Content from "./Content";
import { useLocation } from "react-router-dom";

const Loading = () => {
    return <LinearProgress />;
};

const Content = () => {
    const location = useLocation();

    const [isSidebarOpen, setisSidebarOpen] = useState(false)

    if (
        location.pathname == "/login" ||
        location.pathname == "/register" ||
        location.pathname == "/forgot_password"
    ) {
        return (
            <Suspense fallback={<Loading />}>
                <ContentRoutes />
            </Suspense>
        );
    }

    const toggleBar = () => {
        setisSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className="content">
            <Sidebar isSidebarOpen={isSidebarOpen} toggleBar={toggleBar} />
            <div className="content_area ">
            <Header toggleBar={toggleBar} />
                <Suspense fallback={<Loading />}>
                    <ContentRoutes />
                </Suspense>
            </div>
        </div>
    );
};

export default Content;
