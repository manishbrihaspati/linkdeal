// LayoutWrapper.js
import React, { startTransition, useEffect } from "react";

const LayoutWrapper = ({ children, title }) => {
    useEffect(() => {
        startTransition(() => {
            // Update the title when the component mounts or when pageTitle changes
            document.title = title ? title + ' | Linkdeal' : "Linkdeal";
        });

        return () => {
            // Reset the title when the component unmounts
            document.title = "Linkdeal";
        };
    }, [title]);

    return (
        <div className="main_content">{children}</div>
        );
    };
    
    export default LayoutWrapper;