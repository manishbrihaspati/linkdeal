import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = ({isSidebarOpen , toggleBar}) => {
    const location = useLocation();
    const path = location.pathname;
    
    return (
        <>
            <div className={`sidebar ${isSidebarOpen ? 'activeSidebar' : ''}`} >
                <div className="d-flex flex-column ">
                    <div className="Sidelogo mt-1">
                        <img
                            src="images/react/IconLogo.png"
                            alt=""
                            width="70%"
                        />
                    </div>
                    <nav className={`sideMenu ${isSidebarOpen ? '' : 'mobileHidden'} `}>
                        <Link
                            className={`menu ${
                                location.pathname === "/" ? "activeMenu" : ""
                            }`}
                            to="/"
                        >
                            <svg
                                className="commonIconWhite"
                                viewBox="0 0 24 24"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z"></path>
                            </svg>
                        </Link>
                        <Link
                            className={`menu ${
                                location.pathname === "/connections"
                                    ? "activeMenu"
                                    : ""
                            }`}
                            to="/connections"
                        >
                            <svg
                                className="commonIconWhite"
                                viewBox="0 0 448 512"
                            >
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                            </svg>
                        </Link>
                        <Link
                            className={`menu ${
                                location.pathname === "/calendars"
                                    ? "activeMenu"
                                    : ""
                            }`}
                            to="/calendars"
                        >
                            <svg
                                className="commonIconWhite"
                                viewBox="0 0 448 512"
                            >
                                <path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z"></path>
                            </svg>
                        </Link>
                        <Link
                            className={`menu ${
                                location.pathname === "/extension"
                                    ? "activeMenu"
                                    : ""
                            }`}
                            to="/extension"
                        >
                            <svg
                                className="commonIconWhite"
                                viewBox="0 0 496 512"
                            >
                                <path d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"></path>
                            </svg>
                        </Link>
                        <Link
                            className={`menu ${
                                location.pathname === "/connect_settings"
                                    ? "activeMenu"
                                    : ""
                            }`}
                            to="/connect_settings"
                        >
                            <svg
                                className="commonIconWhite"
                                viewBox="0 0 640 512"
                            >
                                <path d="M496 224C416.4 224 352 288.4 352 368s64.38 144 144 144s144-64.38 144-144S575.6 224 496 224zM544 384h-54.25C484.4 384 480 379.6 480 374.3V304C480 295.2 487.2 288 496 288C504.8 288 512 295.2 512 304V352h32c8.838 0 16 7.162 16 16C560 376.8 552.8 384 544 384zM320.1 352H208C199.2 352 192 344.8 192 336V288H0v144C0 457.6 22.41 480 48 480h312.2C335.1 449.6 320 410.5 320 368C320 362.6 320.5 357.3 320.1 352zM496 192c5.402 0 10.72 .3301 16 .8066V144C512 118.4 489.6 96 464 96H384V48C384 22.41 361.6 0 336 0h-160C150.4 0 128 22.41 128 48V96H48C22.41 96 0 118.4 0 144V256h360.2C392.5 216.9 441.3 192 496 192zM336 96h-160V48h160V96z"></path>
                            </svg>
                        </Link>

                        <Link
                            className={`menu ${
                                location.pathname === "/integrations"
                                    ? "activeMenu"
                                    : ""
                            }`}
                            to="/integrations"
                        >
                            <svg
                                className="commonIconWhite"
                                viewBox="0 0 24 24"
                            >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M16.01 7 16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"></path>
                            </svg>
                        </Link>
                        <Link
                            className={`menu ${
                                location.pathname === "/account_settings"
                                    ? "activeMenu"
                                    : ""
                            }`}
                            to="/account_settings"
                        >
                            <svg
                                className="commonIconWhite"
                                viewBox="0 0 24 24"
                            >
                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path>
                            </svg>
                        </Link>
                    </nav>

                    <div className="logout">
                        <Link className="menu LogoutMenu">
                            <svg
                                className="commonIconWhite"
                                viewBox="0 0 24 24"
                            >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`sidebarOverlay ${isSidebarOpen ? 'd-block' : 'd-none'} `} onClick={toggleBar}></div>
        </>
    );
};

export default Sidebar;
