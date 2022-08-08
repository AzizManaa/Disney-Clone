import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function SignUp() {
  const [number, setNumber] = useState("");
  const [succ, setSucc] = useState(false);
  const [otp, setOTP] = useState("");
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  const getotp = (e) => {
    e.preventDefault();
    if (number.length >= 12) {
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, number, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          setSucc(true);
          // ...
        })
        .catch((error) => {
          // Error; SMS not sent
          // ...
          console.log(error);
        });
    }
  };
  const verifyOTP = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      
      console.log(`success ${otp}`);
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
    }
  };
  return (
    <Container>
      {!succ && (
        <>
          <Wrap>
            <Title>Log in or sign up to continue</Title>
            <form onSubmit={getotp}>
              <Form>
                <select>
                  <option value="fruit">+216</option>
                  <option value="vegetable">+1</option>
                  <option value="meat">+2</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Form>
              <Button type="submit">Get code</Button>
              <div id="recaptcha-container"></div>
            </form>
          </Wrap>
          <GetHelp>
            <span>
              Having trouble logging in?
              <a href="#" target="_blank">
                {" "}
                Get Help
              </a>
            </span>
          </GetHelp>
        </>
      )}
      {succ && (
        <>
          <Wrap>
            <Title>Log in or sign up to continue</Title>
            <span>Enter code sent to</span>
            <h4>{number}</h4>
            <form onSubmit={verifyOTP}>
              <Form>
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  value={otp}
                  onChange={(e) => setOTP(e.target.value)}
                />
              </Form>
              <Button type="submit">Sign Up</Button>
              <div id="recaptcha-container"></div>
            </form>
          </Wrap>
          <GetHelp>
            <span>
              Having trouble logging in?
              <a href="#" target="_blank">
                {" "}
                Get Help
              </a>
            </span>
          </GetHelp>
        </>
      )}
    </Container>
  );
}

export default SignUp;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  background: url("/assests/images/stars_bg.webp") no-repeat;
  background-size: contain;
  &:before {
    z-index: -1;
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background: linear-gradient(
      180deg,
      #021843 -38.64%,
      #0d1628 31.07%,
      #0e1420 65.65%,
      #0f1014 99.46%
    );
  }
`;
const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.4px;
  margin-bottom: 10px;
`;
const Wrap = styled.div`
  margin-top: 15%;
`;
const Form = styled.div`
  padding: 40px;
  select {
    background-color: transparent;
    padding: 20px;
    border: 1px solid #4b5166;
    border-radius: 8px;
    font-size: 18px;
    color: #e1e6f0;
    margin-right: 20px;
    option {
      background-color: #101216;
    }
  }
  input {
    background-color: transparent;
    padding: 20px;
    border: 1px solid #4b5166;
    border-radius: 8px;
    font-size: 18px;
    color: #e1e6f0;
  }
`;
const GetHelp = styled.div`
  color: #8f98b2;
  font-size: 16px;
  font-weight: 400;
  a {
    color: #3586f0;
    font-weight: 600;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;
