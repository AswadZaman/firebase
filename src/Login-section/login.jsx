import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fire";
import "react-toastify/dist/ReactToastify.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

function LogIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    if (isValidate()) {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    }
   
  };
  const isValidate = () => {
    let result = true;
    if (email == "" || email == null) {
      result = false;
      toast.warning("Please inter the email");
    }
    if (password == "" || password == null) {
      result = false;
      toast.warning("Please Enter the Password ");
    }
    return result;
  };

  return (
    <div className="SignUp-cover">
      <MDBContainer className="py-4">
        <MDBCard>
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                src="https://cdn.dribbble.com/users/1948198/screenshots/4377223/dribble.gif"
                alt="login form"
                className="form-img rounded-start w-100"
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <span className="h1 fw-bold mb-0">𝐄𝐚𝐬𝐲𝐁𝐮𝐲</span>
                </div>

                <h5
                  className="fw-normal my-4 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Sign into your account
                </h5>
                <form onSubmit={submitForm}>
                  <MDBInput
                    name="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    wrapperClass="mb-4"
                    label="Email address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                  />
                  <MDBInput
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    wrapperClass="mb-4"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                  />

                  <MDBBtn className="mb-4 px-5" color="dark" size="lg">
                    Login
                  </MDBBtn>

                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Don't have an account?{" "}
                    <Link to="/signup" style={{ color: "#393f81" }}>
                      Register here
                    </Link>
                    <br />
                    <Link to="/" style={{ color: "#393f81" }}>
                      Back To Home Page
                    </Link>
                  </p>

                  <div className="d-flex flex-row justify-content-start">
                    <a href="#!" className="small text-muted me-1">
                      Terms of use.
                    </a>
                    <a href="#!" className="small text-muted">
                      Privacy policy
                    </a>
                  </div>
                </form>
              </MDBCardBody>
              <ToastContainer />
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default LogIn;
