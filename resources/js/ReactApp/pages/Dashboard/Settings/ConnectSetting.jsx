import React, { useState } from "react";
import LayoutWrapper from "../../Layout/LayoutWrapper";

import SwitchBox from "../../../components/Settings/SwitchBox";
import ToolTip from "../../../components/Settings/ToolTip";
import { Chip, Radio } from "@mui/joy";

const ConnectSetting = () => {
    const [checked, setChecked] = useState(false);
    return (
        <LayoutWrapper title="Connect Settings">
            <div className="row">
                <div className="col-md-6">
                    <h5 className="my-4">
                        <b>Connection Settings</b>
                    </h5>
                    <div className="card p-3">
                        <div className="row mt-3">
                            <div className="col-md-6 col-7">
                                <h6 className="d-inline">
                                    <b>Send Request After meetings</b>
                                </h6>
                            </div>
                            <div
                                className="col-md-6 col-5 row"
                                style={{ justifyContent: "right" }}
                            >
                                <div className="switch w-auto">
                                    {/* <Switch color="" size="lg" /> */}
                                    <SwitchBox
                                        checked={checked}
                                        setChecked={setChecked}
                                    />
                                </div>
                                <div className="warninfo w-auto px-0">
                                    <ToolTip text="hello " />
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6 col-7">
                                <h6 className="d-inline">
                                    <b>Freequency Once Daily </b>
                                </h6>
                            </div>
                            <div
                                className="col-md-6 col-5 row"
                                style={{ justifyContent: "right" }}
                            >
                                <div className="switch w-auto ">
                                    {/* <Switch color="" size="lg" /> */}
                                    <SwitchBox
                                        checked={checked}
                                        setChecked={setChecked}
                                    />
                                </div>
                                <div className="warninfo w-auto px-0">
                                    <ToolTip text="hello " />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6 col-7">
                                <h6 className="d-inline">
                                    <b>Freequency - After Minutes (mins) : </b>
                                </h6>
                            </div>
                            <div
                                className="col-md-6 col-5 row"
                                style={{ justifyContent: "right" }}
                            >
                                <div
                                    className="switch w-auto d-flex"
                                    style={{ justifyContent: "right" }}
                                >
                                    {/* <Switch color="" size="lg" /> */}
                                    <div
                                        className="formControl m-0 col-lg-5 col-md-5 col-8 mx-4"
                                        style={{ height: "0" }}
                                    >
                                        <input
                                            className="m-0 py-1 text-right"
                                            type="text"
                                            value={10}
                                        />
                                    </div>
                                </div>
                                <div className="warninfo w-auto px-0">
                                    <ToolTip text="hello " />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6 col-7">
                                <h6 className="d-inline">
                                    <b>Send non-meeting attendees requests</b>
                                </h6>
                            </div>
                            <div
                                className="col-md-6 col-5 row"
                                style={{ justifyContent: "right" }}
                            >
                                <div className="switch w-auto ">
                                    {/* <Switch color="" size="lg" /> */}
                                    <SwitchBox
                                        checked={checked}
                                        setChecked={setChecked}
                                    />
                                </div>
                                <div className="warninfo w-auto px-0">
                                    <ToolTip text="hello " />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6 col-7">
                                <h6 className="d-inline">
                                    <b>Send when meeting attendees accepts</b>
                                </h6>
                            </div>
                            <div
                                className="col-md-6 col-5 row"
                                style={{ justifyContent: "right" }}
                            >
                                <div className="switch w-auto ">
                                    {/* <Switch color="" size="lg" /> */}
                                    <SwitchBox
                                        checked={checked}
                                        setChecked={setChecked}
                                    />
                                </div>
                                <div className="warninfo w-auto px-0">
                                    <ToolTip text="hello " />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6 col-7">
                                <h6 className="d-inline">
                                    <b>Remove pending connection monthly </b>
                                </h6>
                            </div>
                            <div
                                className="col-md-6 col-5 row"
                                style={{ justifyContent: "right" }}
                            >
                                <div className="switch w-auto ">
                                    {/* <Switch color="" size="lg" /> */}
                                    <SwitchBox
                                        checked={checked}
                                        setChecked={setChecked}
                                    />
                                </div>
                                <div className="warninfo w-auto px-0">
                                    <ToolTip text="hello " />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6 col-7">
                                <h6 className="d-inline">
                                    <b>Send connection summary by email </b>
                                </h6>
                            </div>
                            <div
                                className="col-md-6 col-5 row"
                                style={{ justifyContent: "right" }}
                            >
                                <div className="switch w-auto ">
                                    {/* <Switch color="" size="lg" /> */}
                                    <SwitchBox
                                        checked={checked}
                                        setChecked={setChecked}
                                    />
                                </div>
                                <div className="warninfo w-auto px-0">
                                    <ToolTip text="hello " />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="d-inline w-auto col-7">
                                <h6 className="d-inline">
                                    <b>Freequency : </b>
                                </h6>
                            </div>
                            <div
                                className="col-md-9 col-12 row mt-2 mt-sm-0"
                                style={{ gap: "2%" }}
                            >
                                <Radio
                                    sx={{
                                        width: "auto",
                                        display: "inline",
                                        "& .MuiRadio-icon": {
                                            color: "rgb(126 3 226)",
                                        },
                                    }}
                                    orientation="horizontal"
                                    label=" Daily"
                                    size="md"
                                    name="radio-buttons"
                                />
                                <Radio
                                    sx={{
                                        width: "auto",
                                        display: "inline",
                                        "& .MuiRadio-icon": {
                                            color: "rgb(126 3 226)",
                                        },
                                    }}
                                    orientation="horizontal"
                                    label=" Weekly"
                                    size="md"
                                    name="radio-buttons"
                                />
                                <Radio
                                    sx={{
                                        width: "auto",
                                        display: "inline",
                                        "& .MuiRadio-icon": {
                                            color: "rgb(126 3 226)",
                                        },
                                    }}
                                    orientation="horizontal"
                                    label=" Monthly"
                                    size="md"
                                    name="radio-buttons"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-connect">
                            Reset Connection Settings
                        </button>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <h5 className="my-4">
                        <b>Message Settings</b>
                    </h5>
                    <div className="card p-3 ">
                        <div className="row mt-3">
                            <div className="col-md-12 col-7">
                                <h6 className="d-inline">
                                    <b>Connection Greetings</b>
                                </h6>
                            </div>
                            <div
                                className="col-md-12 col-5 row"
                                style={{ justifyContent: "space-between" }}
                            >
                                <div className="switch col-md-px-010 ">
                                    <div className="card f-flex flex-row p-2">
                                        <div className="setting_chip">Hii</div>
                                        <div className="setting_chip">Hey</div>
                                        <div className="setting_chip">
                                            Hi there
                                        </div>
                                    </div>
                                </div>
                                <div className="warninfo w-auto">
                                    <ToolTip text="hello " />
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-12 col-7">
                                <h6 className="d-inline">
                                    <b>Connection Message</b>
                                </h6>
                            </div>
                            <div
                                className="col-md-12 col-5 row"
                                style={{ justifyContent: "space-between" }}
                            >
                                <div
                                    className="switch col-md-px-010 "
                                    style={{ height: "182px" }}
                                >
                                    <div className="formControl">
                                        <textarea
                                            className="form-controll"
                                            name=""
                                            placeholder="{{greeting}}{{connection_name}} &#10;{{summary}}. Let's connect. &#10;{{my_name}}"
                                            id=""
                                            cols="20"
                                            rows="6"
                                            style={{ resize: "none" }}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="warninfo w-auto">
                                    <ToolTip text="hello " />
                                </div>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-6 col-7">
                                <h6 className="d-inline">
                                    <b>
                                        Use <b>Linkdeal AI</b> for connection
                                        message{" "}
                                    </b>
                                </h6>
                            </div>
                            <div
                                className="col-md-6 col-5 row"
                                style={{ justifyContent: "right" }}
                            >
                                <div className="switch w-auto ">
                                    {/* <Switch color="" size="lg" /> */}
                                    <SwitchBox
                                        checked={checked}
                                        setChecked={setChecked}
                                    />
                                </div>
                                <div className="warninfo w-auto px-0">
                                    <ToolTip text="hello " />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6 col-7">
                                <h6 className="d-inline">
                                    <b>Use AI summeries</b>
                                </h6>
                            </div>
                            <div
                                className="col-md-6 col-5 row"
                                style={{ justifyContent: "right" }}
                            >
                                <div className="switch w-auto ">
                                    {/* <Switch color="" size="lg" /> */}
                                    <SwitchBox
                                        checked={checked}
                                        setChecked={setChecked}
                                    />
                                </div>
                                <div className="warninfo w-auto px-0">
                                    <ToolTip text="hello " />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-connect">
                            Reset Message Settings
                        </button>
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    );
};

export default ConnectSetting;
