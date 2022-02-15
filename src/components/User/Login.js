import React, { useState } from "react";
import "./Login.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Register from "./Register/Register";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };
  return (
    <>
      <div className="d-flex flex-column align-items-center" onClick={handleOpen}>
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
              placeholder="Enter email or Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button id="loginBtn" type="submit" onClick={handleSubmit}>
              Login
            </Button>
            <Link className="my-2 ms-auto" style={{ fontSize: "14px" }} to="/">
              Forgot Password?
            </Link>
            <h6 className="my-2">Or Login with</h6>
            <div className="d-flex mb-2 my-2">
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
            <p
              className="d-flex my-2"
              style={{ fontSize: "14px", padding: "0" }}
            >
              Don't have account?
              <Register value={"Register"} />
            </p>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default Login;
