import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const clientId =
  "164559736038-kc3t484u2p3c1ccersf2v9nna9mjpj9b.apps.googleusercontent.com";

function LoginWithGoogle(remainingInfo) {
  let navigate = useNavigate();
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = async (res) => {
    console.log("Login Success:", res.profileObj);
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: res.profileObj.givenName,
        lastName: res.profileObj.familyName,
        email: res.profileObj.email,
        password: remainingInfo.password,
        dateOfBirth: remainingInfo.dateOfBirth,
        bloodGroup: remainingInfo.bloodGroup,
        gender: remainingInfo.gender,
        country: remainingInfo.country,
        state: remainingInfo.state,
        pinCode: remainingInfo.pinCode,
        street: remainingInfo.street,
        city: remainingInfo.city,
      }),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      toast.success(json.msg);
      setTimeout(() => {
        navigate("/");
      }, 2500);
    } else {
      toast.error(json.error);
    }
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  return (
    <div>
      <ToastContainer />
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : null}

      {showlogoutButton ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onLogoutSuccess={onSignoutSuccess}
        ></GoogleLogout>
      ) : null}
    </div>
  );
}
export default LoginWithGoogle;
