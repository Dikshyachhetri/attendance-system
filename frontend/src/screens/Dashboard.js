import React from "react";
import Sidebar from "../components/Sidebar";
import { Row, Col } from "react-bootstrap";
import "../css/login.css";
import "../calendar.css";

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
              <div className="calendar"></div>
<script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js"></script>
            </Col>
          </Row>
        </Col>
      </Row>
      
    </>
  );
};

export default Dashboard;
