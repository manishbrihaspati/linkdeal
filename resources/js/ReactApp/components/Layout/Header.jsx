import React from "react";
import { Link } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const Header = ({toggleBar}) => {
    return (
        <div className="row justify-content-between topbar">
            <div className="col-md-6 col-6">
                <h2>
                    <div className="hamburger" onClick={toggleBar}>
                        <MenuOpenIcon />
                    </div>
                    <b>LinkDeal</b>
                </h2>
            </div>
            <div className="col-md-6 col-6 text-right">
                <div className="">
                    <svg className="commonIcon" viewBox="0 0 24 24">
                        <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
                    </svg>
                    <Link to="/" className="commonLink mx-2">
                        <svg className="commonIcon" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"></path>
                        </svg>
                        <b className="mx-2">John Deo</b>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
