import React from "react";
import LayoutWrapper from "../../Layout/LayoutWrapper";

const Extension = () => {
    return (
        <LayoutWrapper title="Calendars">
            <h5>
                <b>Install the <a className="text-dark" href="">Linkdeal.io</a>  Chrome Extension </b>
            </h5>
            <div className="col-md-3 col-sm-4 my-5">
                <div className="card text-center py-3">
                    <div className="extensionImg">
                        <img
                            src="images/react/IconLogo.png"
                            alt=""
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-connect"> Install </button>
                    </div>
                </div>
            </div>
            <h5>
                <b>Our Chrome Extension is your AI powered Copilot to new connections! It will put your professional network growth  on full autopilot. </b>
            </h5>
        </LayoutWrapper>
    );
};

export default Extension;
