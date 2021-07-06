import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div>
			<Row className="login-page">

				{/* left-side */}
				<Col md={6}>
					<img src="images/feather-login-img.png" alt="" className="login-img"></img>
				</Col>


				{/* right-side */}
				<Col md={6} className=" d-flex flex-all form right">
					<div className="log-content">
						<h1 className="text-center feather">FeatherWebs </h1>
						<div className="log-body">
							<div className="form-group myr-top mb-4">
								<label>Email</label>
								<input type="text" className="form-control custom" placeholder="Someone123@gmail.com" required ></input>
							</div>
							<div className="form-group myr-top mb-4">
								<label>Password</label>
								<input type="password" className="form-control custom" placeholder="********" required></input>
							</div>
							<div class="form-check d-flex justify-content-between mb-5">

								<label className="form-check-label" for="exampleCheck1"><input type="checkbox" className="form-check-input" id="exampleCheck1"></input>Keep me logged In</label>
								<Link to="/">Forgot Password?</Link>
							</div>
							<div className="log-btn text-center">
								<Link to="#" className="btn btn-primary">Sign In</Link>
							</div>

						</div>
					</div>
				</Col>
			</Row>
		</div>
	)
}

export default Login
