import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import "./Register.css";
import BloodGroup from "./BloodGroup";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Gender from "./Gender";
import DOB from "./DOB";

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

function Register(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };
  return (
    <>
      <div
        className="d-flex flex-column align-items-center"
        onClick={handleOpen}
      >
        <PersonAddIcon fontSize="large" style={{ color: "red" }} />
        <h6 className="mb-0" style={{ color: "white" }}>
          Sign Up
        </h6>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="d-flex flex-column align-items-center">
          <form className="registerForm" onSubmit={handleSubmit}>
            <div className="nameSection">
              <input
              className="ms-0"
                type="name"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="me-0"
                type="name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              type="email"
              placeholder="Email or Mobile number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="d-flex align-items-center justify-content-between" style={{width:"100%"}}>
            <Gender/>
            <BloodGroup/>
            <DOB/>
            </div>
            <p className="my-2 p-0" style={{ fontSize: "13px" }}>
              By clicking Sign Up, you agree to our <Link to="/">Terms</Link> ,{" "}
              <Link to="/"> Data Policy</Link> and{" "}
              <Link to="/"> Cookies Policy</Link>. You may receive SMS
              notifications from us and can opt out at any time.
            </p>
            <Button id="signinBtn" type="submit" onClick={handleSubmit}>
              Sign Up
            </Button>

            <h6 className="my-2">Or Sign Up with</h6>

            <div className="d-flex">
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
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default Register;
