import React, { useState } from "react";
import "./Login.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "./Register/SignUp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "black",
  borderRadius: 5,
  border: "2px solid #000",
  boxShadow: "5px 5px 5px 2px rgba(255, 0, 0, 0.5)",
  color: "white",
  outlineWidth: 0,
  p: 1,
};

function Login(props) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState("");

  let navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/about");
      handleClose();
      setEmail("");
      setPassword("");
    } else {
      setFormErrors(json.error);
    }
  };
  return (
    <>
      <div
        className="d-flex flex-column align-items-center"
        onClick={handleOpen}
      >
        <LoginIcon fontSize="large" style={{ color: "red" }} />
        <h6 className="mb-0" style={{ color: "white" }}>
          Login
        </h6>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="d-flex flex-column align-items-center">
          <form className="loginForm" onSubmit={handleSubmit}>
            <div>
              <img
                src={props.logo}
                alt="Blood Warriors"
                style={{ width: "200px" }}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p
              className="mt-2 mb-0 px-1"
              style={{
                backgroundColor: "lightpink",
                color: "red",
                width: "100%",
              }}
            >
              {formErrors}
            </p>
            <Button id="loginBtn" type="submit" onClick={handleSubmit}>
              Login
            </Button>
            <Link className="my-2 ms-auto" style={{ fontSize: "14px" }} to="/">
              Forgot Password?
            </Link>
            <h6 className="my-2">Or Login with</h6>
            <div className="d-flex mb-3 my-2">
              <img
                className="me-3 ms-3 assetIcons"
                src="/facebookIcon.png"
                alt="Facebook"
                style={{ width: "40px", height: "40px" }}
              />
              <img
                className="me-3 ms-3 assetIcons"
                src="/GoogleIcon.png"
                alt="Google"
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <p style={{ fontSize: "14px", margin: "0" }}>Don't have account?</p>
            <div id="loginBtn" style={{ width: "100%", marginBottom: "5px" }}>
              <SignUp title={"Create an account"} />
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default Login;
