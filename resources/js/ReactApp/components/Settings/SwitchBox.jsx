import React, { useState } from "react";

import { Button, Switch, Tooltip } from "@mui/joy";

import { switchClasses } from "@mui/joy/Switch";
const SwitchBox = ({checked, setChecked }) => {
    // const [checked, setChecked] = useState(false);
    return (
        <div>
            <Switch
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
                sx={(theme) => ({
                    "--Switch-thumbShadow": "0 3px 7px 0 rgba(0 0 0 / 0.12)",
                    "--Switch-thumbSize": "27px",
                    "--Switch-trackWidth": "51px",
                    "--Switch-trackHeight": "31px",
                    "--Switch-trackBackground":
                        theme.vars.palette.background.level3,
                    [`& .${switchClasses.thumb}`]: {
                        transition: "width 0.2s, left 0.2s",
                    },
                    "&:hover": {
                        "--Switch-trackBackground":
                            theme.vars.palette.background.level3,
                    },
                    "&:active": {
                        "--Switch-thumbWidth": "32px",
                    },
                    [`&.${switchClasses.checked}`]: {
                        "--Switch-trackBackground": "rgb(48 209 88)",
                        "&:hover": {
                            "--Switch-trackBackground": "rgb(48 209 88)",
                        },
                    },
                })}
            />
        </div>
    );
};

export default SwitchBox;
