import React from "react";
import LayoutWrapper from "../../Layout/LayoutWrapper";
import ConnectCard from "../../../components/Connects/ConnectCard";

const Calendar = () => {
    return (
        <LayoutWrapper title="Calendar">
            <h5>
                <b>Connect your Calendars... </b>
            </h5>
            <div className="row my-2">
                <div className="col-md-3 col-sm-4 mt-3">
                    <ConnectCard
                        heading="Google Calendar"
                        icon="google_calendar.png"
                        connected={false}
                    />
                </div>
                <div className="col-md-3 col-sm-4 mt-3">
                    <ConnectCard
                        heading="Outlook Calendar"
                        icon="outlook_calendar.png"
                        connected={false}
                    />
                </div>
                <div className="col-md-3 col-sm-4 mt-3">
                    <ConnectCard
                        heading="365 Calendar"
                        icon="365_calendar.png"
                        connected={false}
                    />
                </div>
                <div className="col-md-3 col-sm-4 mt-3">
                    <ConnectCard
                        heading="Zoho Calendar"
                        icon="zoho_calendar.png"
                        connected={false}
                    />
                </div>
            </div>

            <h5 className="mt-3">
                <b>Connected Calendars </b>
            </h5>

            <div className="row my-2">
                <div className="col-md-3 col-sm-4 mt-3">
                    <ConnectCard
                        heading="Google Calendar"
                        icon="google_calendar.png"
                        connected={true}
                        email="john@gmai.com"
                    />
                </div>
            </div>
        </LayoutWrapper>
    );
};

export default Calendar;
