import React from "react";
import "../css/listview.scss"
import Sidebar from "../components/Sidebar";
import { Row, Col, Dropdown, DropdownToggle } from "react-bootstrap";
import { Link } from 'react-router-dom';
import SearchBox from "../components/SearchBox";
import { Route } from 'react-router-dom'
// import SortingTableComponent from "../components/ListSorting";
const ListView = () => {

    return (
        <>
            <Row className="bound">
                <Col lg={2}>
                    <Sidebar />
                </Col>
                <Col lg={10} className="not-body">
                    <Row>
                        <Col>
                            <section className="hero">
                                <div className="row top-nav">
                                    <div className="col d-flex justify-content-between">
                                        <h1 className="heading">Employee</h1>
                                        <div>
                                            <Link to="#" className="notify">
                                                <img src="/images/notification.png" />
                                            </Link>
                                            <div className="dropdown mx-1">
                                                <div className="dropbtn user">
                                                    <img src="/images/profile.png" />John Wick
                                                    <img src="/images/dropdown-icon.png" />
                                                </div>
                                                <div className="dropdown-content">
                                                    <Link to="#">My Profile</Link>
                                                    <Link to="#">Status</Link>
                                                    <Link to="/login">Logout</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Col>

                    </Row>
                    <Row className="employee-body">
                        <Col className="d-flex">
                            <Route render={({ history }) => <SearchBox history={history} />} />
                            <Dropdown className="d-inline">
                                <Dropdown.Toggle id="dropdown-autoclose-true" className="department-button">
                                    All Departments
                                    {/* <img src="./images/dropdown-icon.png"></img> */}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Frontend D.</Dropdown.Item>
                                    <Dropdown.Item href="#">Ui/Ux D.</Dropdown.Item>
                                    <Dropdown.Item href="#">Backend D.</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="d-inline">
                                <Dropdown.Toggle id="dropdown-autoclose-true" className="department-button status">
                                    Active
                                    {/* <img src="./images/dropdown-icon.png"></img> */}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">On leave</Dropdown.Item>
                                    <Dropdown.Item href="#">Offline</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="flex-all">
                                <Link to="/employees/listview" className="toggle list"><img src="/images/user-list-icon.svg"></img></Link>
                                <Link to="/employees/gridview" className="toggle grid"><img src="/images/user-card-icon.svg"></img></Link>
                            </div>



                        </Col>
                    </Row>

                    <div class="page-container">


                        {/* <br> */}
                        <ul class="pagination flex-all">
                            {/* <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li> */}
                            <li><a href="#">A</a></li>
                            <li><a href="#">B</a></li>
                            <li><a href="#">C</a></li>
                            <li><a href="#">D</a></li>
                            <li><a href="#">E</a></li>
                            <li><a href="#">F</a></li>
                            <li><a href="#">G</a></li>
                            <li><a href="#">H</a></li>
                            <li><a href="#">I</a></li>
                            <li><a href="#">J</a></li>
                            <li><a href="#">K</a></li>
                            <li><a href="#">L</a></li>
                            <li><a href="#">M</a></li>
                            <li><a href="#">N</a></li>
                            <li><a href="#">O</a></li>
                            <li><a href="#">P</a></li>
                            <li><a href="#">Q</a></li>
                            <li><a href="#">R</a></li>
                            <li><a href="#">S</a></li>
                            <li><a href="#">T</a></li>
                            <li><a href="#">U</a></li>
                            <li><a href="#">V</a></li>
                            <li><a href="#">W</a></li>
                            <li><a href="#">X</a></li>
                            <li><a href="#">Y</a></li>
                            <li><a href="#">Z</a></li>
                            {/* <li><a href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li> */}
                        </ul>
                    </div>

                    {/* <div class="container"> */}
                    <Row>
                        <Col>
                            {/* <SortingTableComponent /> */}
                        </Col>
                    </Row>
                    {/* </div> */}+

                </Col>
            </Row>
        </>
    );
};
export default ListView;