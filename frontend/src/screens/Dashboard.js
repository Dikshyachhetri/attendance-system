import React from "react";
import Sidebar from "../components/Sidebar";
import { Row, Col } from "react-bootstrap";
import "../css/dashboard.css";
// import "../calendar.css";

const Dashboard = () => {
  return (
    <>
      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>
        <Col lg={10}>
          <Row>
            <Col lg={6}>
              <h1 className="heading">Dashboard</h1>
              {/* <div className="calendar"></div>
<script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js"></script> */}
            </Col>
            <Col lg={6}>
              <section className="hero">
                <div className="row">
                  <div className="col d-flex justify-content-end">
                    <a href="#" className="notify">
                      <img src="images/notification.png" alt=""></img>
                    </a>
                    <div className="dropdown  mx-1">
                      <div className="dropbtn user">
                        <img src="images/profile.png" alt=""></img> John Wick
                        <img src="images/dropdown-icon.png" alt=""></img>
                      </div>
                      <div className="dropdown-content">
                        <a href="#">My Profile</a>
                        <a href="#">Status</a>
                        <a href="#">Logout</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <a href="#" className="leave-btn">
                <img src="images/checkin.svg" alt=""></img> Check In
              </a>
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
                <ul>
                  <li className="employee-list">
                    <img src="images/employee-leave-profile.svg" className="profile-img"></img>
                    <div className="employee-profile">
                      <p className="name">Eren Yeager</p>
                      <p className="date">till 01/02/2021</p>
                    </div>
                    <p className="designation">Front End</p>
                  </li>
                  <li className="employee-list">
                    <img src="images/employee-leave-profile.svg" className="profile-img"></img>
                    <div className="employee-profile">
                      <p className="name">Eren Yeager</p>
                      <p className="date">till 02/04/2020</p>
                    </div>
                    <p className="designation">Front End</p>
                  </li>
                  <li className="employee-list">
                    <img src="images/employee-leave-profile.svg" className="profile-img"></img>
                    <div className="employee-profile">
                      <p className="name">Eren Yeager</p>
                      <p className="date">till 05/04/2020</p>
                    </div>
                    <p className="designation">Front End</p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
