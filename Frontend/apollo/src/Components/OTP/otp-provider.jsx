import React, { useState } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import app from "./otp-firebase.js";
import "./OTP.css";

const OTP = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile") {
      setMobile(value);
    } else if (name === "otp") {
      setOtp(value);
    }
  };

  const configureCaptcha = () => {
    const auth = getAuth(app);
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
      size: "invisible",
      callback: (response) => {
        onSignInSubmit();
        console.log("Recaptcha verified");
      },
      defaultCountry: "IN",
    });
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = "+91" + mobile;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth(app);
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((result) => {
      window.confirmationResult = result;
    })
    .catch((error) => {
      console.error("SMS not sent", error);
    });  
  };

  const onSubmitOtp = (e) => {
    e.preventDefault();
    const code = otp;
  
    if (window.confirmationResult) {
      window.confirmationResult
        .confirm(code)
        .then((result) => {
          const user = result.user;
          // console.log(JSON.stringify(user));
          alert("User is verified");
          window.location.href = '/login';
        })
        .catch((error) => {
          console.error("OTP verification failed", error);
        });
    } else {
      console.error("confirmationResult is null");
    }
  };
  

  return (
    <div className="otp-container">
      <h2>Verify Registration through your mobile number</h2>
      <form onSubmit={onSignInSubmit}>
        <div id="sign-in-button"></div>
        <input
          type="text"
          name="mobile"
          className="otp-input"
          placeholder="Mobile number"
          value={mobile}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      <h2>Enter OTP</h2>
      <form onSubmit={onSubmitOtp}>
        <input
          type="text"
          name="otp"
          placeholder="OTP Number"
          value={otp}
          className="otp-input"
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OTP;
