import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <div>
            <Row className="login-page">

                {/* left-side */}
                <Col md={6} className="left flex-all">
                    <img src="images/feather-login-img.png" alt="" ></img>
                </Col>


                {/* right-side */}
                <Col md={6} className="flex-all  form right ">
                    <div className="log-content">
                        <h1 className=" feather">Forgot Password </h1>
                        <p>Enter you associated email id and we’ll send you a link to
                            reset your password.</p>
                        <div className="log-body">
                            <div className="form-group myr-top mb-5">
                                <input type="text" className="form-control custom" placeholder="Someone123@gmail.com" required ></input>
                            </div>


                            <div className="log-btn mb-5">
                                <Link to="#" className="btn btn-primary">SUBMIT</Link>
                            </div>

                            <Link to="/" className="login-back" ><i class="fas fa-chevron-left"></i>
                                <span>Back to Login</span> </Link>

                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ForgotPassword
