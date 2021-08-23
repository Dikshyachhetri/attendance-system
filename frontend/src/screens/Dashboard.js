import React from "react";
import Sidebar from "../components/Sidebar";
import { Row, Col } from "react-bootstrap";
import "../css/dashboard.css";
import { Link } from 'react-router-dom';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, Page, setOptions } from '@mobiscroll/react';
import { Eventcalendar } from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.scss';
// import "../calendar.css";

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

const Dashboard = () => {
    const now = new Date();

    const [marked] = React.useState([
        { recurring: { repeat: 'yearly', month: 5, day: 1 }, color: '#ffc400' },
        { recurring: { repeat: 'yearly', month: 12, day: 24 }, color: '#ffee00' },
        { recurring: { repeat: 'yearly', month: 12, day: 25 }, color: 'red' },
        { date: new Date(now.getFullYear(), now.getMonth() + 1, 4) },
        { date: new Date(now.getFullYear(), now.getMonth() - 2, 13) },


        { date: new Date(now.getFullYear(), now.getMonth(), 2), color: '#46c4f3' },
        { date: new Date(now.getFullYear(), now.getMonth(), 2), color: '#46c4f3' },
        { date: new Date(now.getFullYear(), now.getMonth(), 1), color: '#46c4f3' },

        { date: new Date(now.getFullYear(), now.getMonth(), 1), color: '#46c4f3' },

        { date: new Date(now.getFullYear(), now.getMonth(), 6), color: '#7e56bd' },
        { date: new Date(now.getFullYear(), now.getMonth(), 11), color: '#7e56bd' },
        { date: new Date(now.getFullYear(), now.getMonth(), 19), color: '#89d7c9' },
        { date: new Date(now.getFullYear(), now.getMonth(), 28), color: '#ea4986' },
        { date: new Date(now.getFullYear(), now.getMonth(), 13), color: '#7e56bd' },
        { date: new Date(now.getFullYear(), now.getMonth(), 13), color: '#f13f77' },
        { date: new Date(now.getFullYear(), now.getMonth(), 13), color: '#89d7c9' },
        { date: new Date(now.getFullYear(), now.getMonth(), 13), color: '#8dec7d' },
        { date: new Date(now.getFullYear(), now.getMonth(), 21), color: '#ffc400' },
        { date: new Date(now.getFullYear(), now.getMonth(), 21), color: '#8dec7d' },
        { start: new Date(now.getFullYear(), now.getMonth() + 1, 15), end: new Date(now.getFullYear(), now.getMonth() + 1, 18), color: '#f4511e' }
    ]);
    return (
        <>
            <Row className="bound">
                <Col lg={2}>
                    <Sidebar />
                </Col>
                <Col lg={10}>
                    <Row>
                        <section className="hero">
                            <div className="row top-nav">
                                <div className="col d-flex justify-content-between">
                                    <h1 className="heading">Dashboard</h1>
                                    <div className="flex-all">

                                        <Link to="/checkout" className="leave-btn">
                                            <img src="images/checkin.svg" alt=""></img> Check In
                                        </Link>
                                        <Link to="/notifications" className="notify">
                                            <img src="images/notification.svg" alt=""></img>
                                        </Link>
                                        <div className="dropdown">
                                            <div className="dropbtn user">
                                                <img src="images/profile.png" alt=""></img> John Wick
                                                <img src="images/dropdown-icon.png" alt=""></img>
                                            </div>
                                            <div className="dropdown-content">
                                                <a href="#">My Profile</a>
                                                <a href="#">Status</a>
                                                <a href="/login">Logout</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </Row>
                    <Row>
                        <Col lg={7}>
                            <Page>
                                <div className="dash-calendar">
                                    {/* <div className="mbsc-form-group-title">Marked days</div> */}
                                    <Datepicker controls={['calendar']} display="inline" marked={marked} />
                                </div>
                            </Page>

                            <div className="upcoming-days">
                                <div id="wrapper">
                                    <div class="scrollbar-second" id="style-2">
                                        <ul class="force-overflow">
                                            <li>
                                                <div className="top">
                                                    <p className="holiday-date-box">Jul 24</p>
                                                    <p>Guru Purnima</p>
                                                </div>
                                                <div className="bottom">
                                                    <p>Holiday</p>
                                                    <img src="/images/holiday-red.svg"></img>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="top">
                                                    <p className="holiday-date-box">Jul 24</p>
                                                    <p>Guru Purnima</p>
                                                </div>
                                                <div className="bottom">
                                                    <p>Holiday</p>
                                                    <img src="/images/holiday-red.svg"></img>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="top">
                                                    <p className="holiday-date-box">Jul 24</p>
                                                    <p>Guru Purnima</p>
                                                </div>
                                                <div className="bottom">
                                                    <p>Holiday</p>
                                                    <img src="/images/holiday-red.svg"></img>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="top">
                                                    <p className="holiday-date-box">Jul 24</p>
                                                    <p>Guru Purnima</p>
                                                </div>
                                                <div className="bottom">
                                                    <p>Holiday</p>
                                                    <img src="/images/holiday-red.svg"></img>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="top">
                                                    <p className="holiday-date-box">Jul 24</p>
                                                    <p>Guru Purnima</p>
                                                </div>
                                                <div className="bottom">
                                                    <p>Holiday</p>
                                                    <img src="/images/holiday-red.svg"></img>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="top">
                                                    <p className="holiday-date-box">Jul 24</p>
                                                    <p>Guru Purnima</p>
                                                </div>
                                                <div className="bottom">
                                                    <p>Holiday</p>
                                                    <img src="/images/holiday-red.svg"></img>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            {/* <div className="calendar"></div>
<script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js"></script> */}
                        </Col>
                        <Col lg={5} className="dashboard-right">



                            <h2 className="leave">Leaves</h2>
                            <div className="leave-box">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <p className="box-heading ">Leaves Taken</p>
                                        <p className="box-leaves ">5</p>
                                    </div>
                                    <div>
                                        <p className="box-heading ">Remaining Leaves</p>
                                        <p className="box-leaves ">11</p>
                                    </div>
                                </div>
                                <a href="#" className="apply-leave-btn">
                                    Apply Leave
                                </a>
                                <h2 className="employee-leave">Employees on Leave</h2>
                                <div className="wrapper">
                                    <div className="scrollbar" id="style-2">
                                        <ul className="force-overflow">
                                            <li className="employee-list">
                                                <img src="images/user-1.svg" className="profile-img"></img>
                                                <div className="employee-profile">
                                                    <p className="name">Eren Yeager</p>
                                                    <p className="date">till 01/02/2021</p>
                                                </div>
                                                <p className="designation">Front End</p>
                                            </li>
                                            <li className="employee-list">
                                                <img src="images/user-2.svg" className="profile-img"></img>
                                                <div className="employee-profile">
                                                    <p className="name">Eren Yeager</p>
                                                    <p className="date">till 02/04/2020</p>
                                                </div>
                                                <p className="designation">Front End</p>
                                            </li>
                                            <li className="employee-list">
                                                <img src="images/user-3.svg" className="profile-img"></img>
                                                <div className="employee-profile">
                                                    <p className="name">Eren Yeager</p>
                                                    <p className="date">till 05/04/2020</p>
                                                </div>
                                                <p className="designation">Front End</p>
                                            </li>
                                            <li className="employee-list">
                                                <img src="images/user-1.svg" className="profile-img"></img>
                                                <div className="employee-profile">
                                                    <p className="name">Eren Yeager</p>
                                                    <p className="date">till 01/02/2021</p>
                                                </div>
                                                <p className="designation">Front End</p>
                                            </li>
                                            <li className="employee-list">
                                                <img src="images/user-1.svg" className="profile-img"></img>
                                                <div className="employee-profile">
                                                    <p className="name">Eren Yeager</p>
                                                    <p className="date">till 01/02/2021</p>
                                                </div>
                                                <p className="designation">Front End</p>
                                            </li>
                                            <li className="employee-list">
                                                <img src="images/user-1.svg" className="profile-img"></img>
                                                <div className="employee-profile">
                                                    <p className="name">Eren Yeager</p>
                                                    <p className="date">till 01/02/2021</p>
                                                </div>
                                                <p className="designation">Front End</p>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </Col>

                    </Row>

                </Col>

            </Row>
        </>
    );
};

export default Dashboard;