import React from "react";
import { useState } from "react";
import { db } from "./fire";
import { collection, addDoc } from "firebase/firestore";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function SecondPage() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [cname, setCName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "users"), {
        firstName: fname,
        lname: lname,
        cname: cname,
        address: address,
        email: email,
        phone: phone,
        info: info,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    //   const users = [fname, lname, cname, address, email, phone, info];
    //   const res = fetch(
    //     "https://contact-5ad0c-default-rtdb.firebaseio.com/userDataRecords.json",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         fname,
    //         lname,
    //         cname,
    //         address,
    //         email,
    //         phone,
    //         info,
    //       }),
    //     }
    //   );
    //   if (res) {
    //     alert("data Stored");
    //   } else {
    //     alert("Please fill the data");
    //   }
    //   reset();
    // };
    // const reset = () => {
    //   return (
    //     (setFName = ""),
    //     (setLName = ""),
    //     (setCName = ""),
    //     (setAddress = ""),
    //     (setInfo = ""),
    //     (setPhone = ""),
    //     (setEmail = "")
    //   );
  };

  return (
    <form className="m-5" onSubmit={handleSubmit}>
      <h1 className="App font-weight-bold  b">Cloud FireStore</h1>
      <MDBRow className="mb-4">
        <MDBCol>
          <MDBInput
            name="fname"
            value={fname}
            onChange={(e) => setFName(e.target.value)}
            id="form6Example1"
            label="First name"
          />
        </MDBCol>
        <MDBCol>
          <MDBInput
            name="lname"
            value={lname}
            onChange={(e) => setLName(e.target.value)}
            id="form6Example2"
            label="Last name"
          />
        </MDBCol>
      </MDBRow>

      <MDBInput
        name="cname"
        value={cname}
        onChange={(e) => setCName(e.target.value)}
        wrapperClass="mb-4"
        id="form6Example3"
        label="Company name"
      />
      <MDBInput
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        wrapperClass="mb-4"
        id="form6Example4"
        label="Address"
      />
      <MDBInput
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        wrapperClass="mb-4"
        type="email"
        id="form6Example5"
        label="Email"
      />
      <MDBInput
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        wrapperClass="mb-4"
        type="tel"
        id="form6Example6"
        label="Phone"
      />

      <MDBInput
        name="info"
        value={info}
        onChange={(e) => setInfo(e.target.value)}
        wrapperClass="mb-4"
        textarea
        id="form6Example7"
        rows={4}
        label="Additional information"
      />

      <MDBCheckbox
        wrapperClass="d-flex justify-content-center mb-4"
        id="form6Example8"
        label="Create an account?"
        defaultChecked
      />

      <MDBBtn className="mb-4" type="submit" block>
        submit
      </MDBBtn>
    </form>
  );
}
