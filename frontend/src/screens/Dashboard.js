import React from 'react'
import Sidebar from '../components/Sidebar'
import { Row, Col } from 'react-bootstrap'
import "../css/login.cssgit "
import DatePicker from "react-datepicker";


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
                
            </Col>
        </Row>
        </Col>
        </Row>
        </>
    )
}

export default Dashboard
