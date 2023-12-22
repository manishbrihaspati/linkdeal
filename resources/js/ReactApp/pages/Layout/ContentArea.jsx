import React, { Suspense } from "react";
import ContentRoutes from "../../routes/ContentRoutes";

const Loading = () => {
    return <div> loading </div>;
};

const ContentArea = () => {
    return (
        <Suspense fallback={<Loading />}>
            <ContentRoutes />
        </Suspense>
    );
};

export default ContentArea;
