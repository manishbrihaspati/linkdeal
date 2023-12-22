import React from "react";

import { Tooltip } from "@mui/joy";
const ToolTip = ({ text }) => {
    return (
        <Tooltip title={text} arrow variant="solid">
            <svg
                className="commonIcon"
                style={{
                    fill: "rgb(147, 3, 230)",
                    cursor: "pointer",
                }}
                viewBox="0 0 24 24"
            >
                <path d="M0 0h24v24H0V0z" fill="none"></path>
                <path d="M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
            </svg>
        </Tooltip>
    );
};

export default ToolTip;
