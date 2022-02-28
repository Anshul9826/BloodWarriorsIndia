import React, { useState } from "react";
import "./Common.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SetNewPassword from "./SetNewPassword";

function ForgotPasword(props) {
  const [email, setEmail] = useState("");
  
  const [showOtpForm, setShowOtpForm] = useState(true);

  const sendOtp = async (e) => {
    e.preventDefault();
    const response = await fetch("https://bloodwarriorsindia.herokuapp.com/api/auth/email_send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const json = await response.json();
    if (json.success) {
      toast.success(json.msg);
      setShowOtpForm(false);
    } else {
      toast.error(json.error);
    }
  };
  
  return (
    <div className="formStyle d-flex flex-column align-items-center py-4">
      <ToastContainer />
      <Link to="/">
        <img id="logo" src={props.logo} alt="Blood Warriors" />
      </Link>
      {showOtpForm ? (
        <form id="form">
          <h3>Enter Your Email</h3>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div id="Btn" onClick={sendOtp}>
            Send Otp
          </div>
          <Link id="Btn" to="/login">
            Back
          </Link>
        </form>
      ) : (
       <SetNewPassword email={email} />
      )}
    </div>
  );
}

export default ForgotPasword;
