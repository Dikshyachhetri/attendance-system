import React from "react";
import "../css/notification.css";
import Sidebar from "../components/Sidebar";
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
const Notification = () => {
    return (
        <>
            <Row className="bound">
                <Col lg={2}>
                    <Sidebar />
                </Col>
                <Col lg={10} className="not-body">
                    <Row>
                        <section className="hero">
                            <div className="row top-nav">
                                <div className="col d-flex justify-content-between">
                                    <h1 className="heading">Notification</h1>
                                    <div>
                                        <Link to="#" className="notify">
                                            <img src="images/notification.png" />
                                        </Link>
                                        <div className="dropdown mx-1">
                                            <div className="dropbtn user">
                                                <img src="images/profile.png" />John Wick
                                                <img src="images/dropdown-icon.png" />
                                            </div>
                                            <div className="dropdown-content">
                                                <Link to="#">My Profile</Link>
                                                <Link to="#">Status</Link>
                                                <Link to="#">Logout</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Row>
                    <Row>
                        <Col md={5} className="header">
                            <img src="images/leave-green.svg" />
                            <span className="color-icons">Leave</span>
                            <img src="images/meeting-orange.svg" />
                            <span className="color-icons">Meeting</span>
                            <img src="images/event-blue.svg" />
                            <span className="color-icons">Event</span>
                            <img src="images/holiday-red.svg" />
                            <span className="color-icons">Holiday</span>
                        </Col>
                        <Col className="not-lists">
                            <div>
                                <p className="not-date first-date">June 24, 2021</p>
                                <p className="not-time">15:25:44</p>
                                <p className="not-date">June 24, 2021</p>
                                <p className="not-time">15:25:44</p>
                                <p className="not-date">June 24, 2021</p>
                                <p className="not-time">15:25:44</p>
                                <p className="not-date">June 24, 2021</p>
                                <p className="not-time">15:25:44</p>
                                <p className="not-date">June 24, 2021</p>
                                <p className="not-time">15:25:44</p>
                            </div>
                            <div>
                                <img
                                    src="images/timeline.svg"
                                    className="timeline"></img>
                            </div>
                            <div>
                                <div className="not-details">
                                    Your leave request has been granted
                                </div>
                                <div className="not-details">
                                    Your leave request has been granted
                                </div>
                                <div className="not-details">
                                    Your leave request has been granted
                                </div>
                                <div className="not-details">
                                    Your leave request has been granted
                                </div>
                                <div className="not-details">
                                    Your leave request has been granted
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};
export default Notification;