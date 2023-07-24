import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import "react-phone-number-input/style.css";
import { Button } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../context/userAuthContext";

const PhoneSignUp = () => {
    
    const [number, setNumber] = useState("");
    const [error, setError] = useState("");
    const { setUpRecaptha } = useUserAuth();
    const [result, setResult] = useState("");
    

    const getOtp = async (e) => {
        e.preventDefault();
        console.log(number);
        setError("");
        if (number === "" || number === undefined)
          return setError("Please enter a valid phone number!");
        try {
          const response = await setUpRecaptha(number);
          setResult(response);
          
        } catch (err) {
          setError(err.message);
        }
      };

return(
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Phone</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp}>
          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
              <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              Send Otp
            </Button>
          </div>
          </Form>
          </div>
          </>
);

};
export default PhoneSignUp;