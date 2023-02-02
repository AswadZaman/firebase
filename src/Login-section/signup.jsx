import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../fire";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";

function SignUp() {

 
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const SubmitHandle = async(e) => {
    e.preventDefault();
    if (isValidate()) {
      await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          
          const user = userCredential.user;
          console.log(user);
          navigate("/login")
          
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
    <MDBContainer
      style={{ background: "#FAFAFA" }}
      fluid
      className="p-4  overflow-hidden"
    >
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1
            className="my-5 display-3 fw-bold ls-tight px-3"
            style={{
              color: "black",
              fontFamily: "Playfair Display",
            }}
          >
            The Best Offer <br />
            <span
              style={{
                color: "black",
                fontFamily: "Playfair Display",
              }}
            >
              For Your Shopping
            </span>
          </h1>

          <p
            className="px-3 "
            style={{
              color: "#737373",
              fontFamily: "Playfair Display",
            }}
          >
            Browse & discover millions of products. Read customer reviews and
            find best sellers. We ship to over 100 international destinations,
            right to your doorstep. It's sale time of the year! Makeup City sale
            is here with up to 50% off on products. Shop your favorite
            essentials at discounts. Visit website or shop instores.
          </p>
        </MDBCol>

        <MDBCol md="6" className="position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>

          <MDBCard className="my-5 bg-glass">
            <MDBCardBody className="p-5">
              <form onSubmit={SubmitHandle}>
                
                

               

                <MDBInput
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  wrapperClass="mb-4"
                  label="Email"
                  id="form3"
                  type="email"
                />
                <MDBInput
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  wrapperClass="mb-4"
                  label="Password"
                  id="form4"
                  type="password"
                />

               

                <MDBBtn className="w-100 mb-4" size="md">
                  sign up
                </MDBBtn>
              </form>
              <div className="text-center">
                <p>or sign up with:</p>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <FacebookOutlinedIcon size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <TwitterIcon size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <GoogleIcon size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <InstagramIcon size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <ToastContainer />
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignUp;
