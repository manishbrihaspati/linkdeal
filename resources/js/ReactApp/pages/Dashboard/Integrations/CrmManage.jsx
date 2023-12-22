import React from "react";

import LayoutWrapper from "../../Layout/LayoutWrapper";
import ConnectCard from "../../../components/Connects/ConnectCard";

const CrmManage = () => {
    return (
        <LayoutWrapper title="Calendar">
            <h5>
                <b>Connect your CRM... </b>
            </h5>
            <div className="row my-2">
                <div className="col-md-3 col-sm-4 mt-3">
                    <ConnectCard
                        heading="Zoom"
                        icon="zoomcrm.png"
                        connected={false}
                    />
                </div>
                <div className="col-md-3 col-sm-4 mt-3">
                    <ConnectCard
                        heading="Gong"
                        icon="gongcrm.png"
                        connected={false}
                    />
                </div>
                <div className="col-md-3 col-sm-4 mt-3">
                    <ConnectCard
                        heading="Salesforce"
                        icon="salesforcecrm.png"
                        connected={false}
                    />
                </div>
                <div className="col-md-3 col-sm-4 mt-3">
                    <ConnectCard
                        heading="Hubspot"
                        icon="hubspotcrm.png"
                        connected={false}
                    />
                </div>
            </div>

            <h5 className="mt-3">
                <b>Connected CRM </b>
            </h5>

            <div className="row my-2">
                <div className="col-md-3 col-sm-4 mt-3">
                    <ConnectCard
                        heading="Salesforce"
                        icon="salesforcecrm.png"
                        connected={true}
                        email="john@gmail.com"
                    />
                </div>
            </div>
        </LayoutWrapper>
    );
};

export default CrmManage;
