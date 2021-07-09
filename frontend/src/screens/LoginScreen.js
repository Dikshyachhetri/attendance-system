import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../css/login.css"

const Login = () => {

	return (
		<>
			<Row className="login-page">

				{/* left-side */}
				<Col md={6} className="left flex-all">
					<img src="images/feather-login-img.png" alt="" ></img>
				</Col>


				{/* right-side */}
				<Col md={6} className="flex-all form right ">
					<div className="log-content">
						<h1 className=" feather">Login </h1>
						<div className="log-body">
							<div className="form-group myr-top mb-4">
								<label>Email</label>
								<input type="text" className="form-control custom" placeholder="Someone123@gmail.com" required ></input>
							</div>
							<div className="form-group myr-top mb-4">
								<label>Password</label>
								<input type="password" className="form-control custom" placeholder="********" required></input>
							</div>
							<div class="form-check d-flex justify-content-between">
								{/* <div>
									<label for="exampleCheck1">Keep me logged In</label>
									<input type="checkbox" id="exampleCheck1"></input>
								</div> */}
								<div className="check-box">
									<input type="checkbox" id="scales" name="scales"></input>
									<label for="scales" className="checkbox-box">Remember Me</label>
								</div>


								{/* <div>
									<label><input type="checkbox" id="cbox1" value="first_checkbox"> </input> Este es mi primer checkbox </label>
								</div> */}

								<Link to="/forgotpassword">Forgot Password?</Link>
							</div>
							<div className="log-btn ">
								<Link to="#" className="btn btn-primary">SIGN IN</Link>
							</div>

						</div>
					</div>
				</Col>
			</Row>
		</>
	)
}

export default Login
