import React, { useState } from "react";
import "../../styles/login.css";
import { Link } from "react-router-dom";
import LayoutWrapper from "../Layout/LayoutWrapper";

const Login = () => {
    const [passwordShown, setpasswordShown] = useState(false);
    return (
        <LayoutWrapper title='Login'>
            <div className="mainDiv">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src="images/react/banners/login_side_banner.jpg"
                            alt="banner"
                            className="loginImg hidden"
                        />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="LoginFormSection px-3">
                            <div className="logo text-center">
                                <img
                                    src="images/react/logo.png"
                                    alt="linkdeal"
                                    className="loginLogo"
                                />
                            </div>
                            <div className="container px-3 mt-4">
                                <h4 className="my-2">
                                    <b>Log in</b>
                                </h4>
                                <p className="my-3 text-muted">
                                    The AI Copilot to expand your Professional
                                    Network
                                </p>

                                <form action="">
                                    <div className="formControl">
                                        <label htmlFor="">
                                            Enter your email address
                                        </label>
                                        <input type="email" placeholder="" />
                                        <div className="icon">
                                            <svg viewBox="0 0 512 512">
                                                <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="formControl">
                                        <label htmlFor="">
                                            Enter your password
                                        </label>
                                        <input
                                            type={
                                                !passwordShown
                                                    ? "password"
                                                    : "text"
                                            }
                                            placeholder=""
                                            className=""
                                        />
                                        <div
                                            className="icon"
                                            onClick={() =>
                                                setpasswordShown(!passwordShown)
                                            }
                                        >
                                            {passwordShown ? (
                                                <svg viewBox="0 0 640 512">
                                                    <path d="M150.7 92.77C195 58.27 251.8 32 320 32C400.8 32 465.5 68.84 512.6 112.6C559.4 156 590.7 207.1 605.5 243.7C608.8 251.6 608.8 260.4 605.5 268.3C592.1 300.6 565.2 346.1 525.6 386.7L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L150.7 92.77zM223.1 149.5L313.4 220.3C317.6 211.8 320 202.2 320 191.1C320 180.5 316.1 169.7 311.6 160.4C314.4 160.1 317.2 159.1 320 159.1C373 159.1 416 202.1 416 255.1C416 269.7 413.1 282.7 407.1 294.5L446.6 324.7C457.7 304.3 464 280.9 464 255.1C464 176.5 399.5 111.1 320 111.1C282.7 111.1 248.6 126.2 223.1 149.5zM320 480C239.2 480 174.5 443.2 127.4 399.4C80.62 355.1 49.34 304 34.46 268.3C31.18 260.4 31.18 251.6 34.46 243.7C44 220.8 60.29 191.2 83.09 161.5L177.4 235.8C176.5 242.4 176 249.1 176 255.1C176 335.5 240.5 400 320 400C338.7 400 356.6 396.4 373 389.9L446.2 447.5C409.9 467.1 367.8 480 320 480H320z"></path>
                                                </svg>
                                            ) : (
                                                <img
                                                    src="images/react/icons/eye_shown_icon.svg"
                                                    width={17}
                                                    alt=""
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div className="row justify-content-between mt-3">
                                        <div className="w-auto row CheckBoxInput pr-0">
                                            <label htmlFor="rememberme">
                                                <input
                                                    type="checkbox"
                                                    id="rememberme"
                                                    className="Loginrememberme"
                                                />
                                                Remember Me
                                            </label>
                                        </div>
                                        <div className="w-auto forgotPass pl-0">
                                            <Link to="/forgot_password">
                                                Forgot Password?
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="submitSection mt-3 d-flex justify-content-center">
                                        <button
                                            className="btn btn-primary py-2"
                                            style={{ width: "100%" }}
                                        >
                                            Log In
                                        </button>
                                    </div>
                                </form>

                                <div className="d-flex loginDivide mt-3 justify-content-between ">
                                    <hr className="text-muted" />
                                    <p className="text-muted">or</p>
                                    <hr className="text-muted" />
                                </div>

                                <div className="socialLoginButtons">
                                    <div className="btnArea justify-content-between d-flex">
                                        <div className="icon">
                                            <svg viewBox="0 0 488 512">
                                                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                                            </svg>
                                        </div>
                                        <div className="icon">
                                            <svg viewBox="0 0 448 512">
                                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                            </svg>
                                        </div>
                                        <div className="icon">
                                            <svg viewBox="0 0 448 512">
                                                <path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mt-4 text-muted">
                                    <p>
                                        Don't have an account yet?
                                        <Link
                                            className="text-muted commonLink"
                                            to="/register"
                                        >
                                            <b> Sign up</b>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    );
};

export default Login;
