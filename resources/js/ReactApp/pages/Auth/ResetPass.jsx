import React from "react";
import "../../styles/login.css";
import { Link } from "react-router-dom";
import LayoutWrapper from "../Layout/LayoutWrapper";

const ResetPass = () => {
    return (
        <LayoutWrapper title='Forgot Password '>
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
                                    className="loginLogo "
                                />
                            </div>
                            <div className="container px-3 mt-4">
                                <h4 className="my-2">
                                    <b>Reset Password</b>
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
                                    <div className="row justify-content-between mt-3">
                                        <div className="col-md-6 col-6 row CheckBoxInput"></div>
                                        <div className="col-md-6 col-6 forgotPass">
                                            <Link to="/login">
                                                Back to Login?
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="submitSection mt-3 d-flex justify-content-center">
                                        <button
                                            className="btn btn-primary py-2"
                                            style={{ width: "100%" }}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>

                                {/* <div className="d-flex loginDivide mt-3 justify-content-between ">
                                <hr className="text-muted" />
                                <p className="text-muted">or</p>
                                <hr className="text-muted" />
                            </div>
                            <div className="text-center mt-4 text-muted">
                                <p>
                                    Don't have an account yet ?
                                    <Link className="text-muted " to='/register'><b> Sign up</b> </Link> 
                                </p>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    );
};

export default ResetPass;
