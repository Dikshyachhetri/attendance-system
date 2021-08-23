import React from 'react'
import { Row, Col, Dropdown, DropdownToggle } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import "../css/checkout.scss"




const CheckOut = () => {
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
                                    <h1 className="heading">CheckOut</h1>
                                    <div>
                                        <Link to="/notifications" className="notify">
                                            <img src="images/notification.png" alt=""></img>
                                        </Link>
                                        <div className="dropdown  mx-1">
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
                        <Col>


                            <h3 className="sub-heading">Daily Update</h3>

                            <form className="row g-3">
                                <div className="top-row">
                                    <div className="date-box">
                                        <label className="form-label">Date: </label>
                                        <span>05/02/2021</span>
                                    </div>


                                    <div>
                                        <label className="form-label">Time:</label>
                                        <span>17:55:45</span>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <label for="inputAddress" className="form-label">Topic</label>
                                    <input type="text" className="form-control topic" id="inputAddress" placeholder="Login Page"></input>
                                </div>
                                <div className="col-9">
                                    <label for="inputAddress2" className="form-label">Detail</label>
                                    <textarea type="text" className="form-control details" id="inputAddress2" placeholder="Login page completed today"></textarea>
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="checkout-btn">Submit and Check Out</button>
                                </div>
                            </form>
                        </Col>

                    </Row>

                </Col>

            </Row>
        </>
    )
}

export default CheckOut
