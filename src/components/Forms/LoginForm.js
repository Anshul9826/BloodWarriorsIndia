import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Form.css";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <>
      <Link className="nav-link active button" to="/" onClick={handleShow}>
        Login
      </Link>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="form-control">
          <Form.Group
            className="d-flex flex-column align-items-center"
            onSubmit={props.onSubmit}
          >
            <div>
              <img
                src={props.logo}
                alt="Blood Warriors"
                style={{ width: "200px" }}
              />
            </div>
            <input
              className="m-2 p-2 rounded-2 form-control"
              type="email"
              placeholder="Enter email or Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="my-2 p-2 rounded-2 form-control"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              className="btn form-control my-2"
              id="loginBtn"
              type="submit"
              onClick={onLoginFormSubmit}
            >
              Login
            </Button>
            <Link className="my-2 ms-auto" style={{ fontSize: "14px" }} to="/">
              Forgot Password?
            </Link>
            <h6 className="my-2">Or Login with</h6>
            <div className="d-flex mb-2 my-2">
              <img
                className="me-3 ms-3 assetIcons"
                src="/assets/facebookIcon.png"
                alt="Facebook"
                style={{ width: "40px", height: "40px" }}
              />
              <img
                className="me-3 ms-3 assetIcons"
                src="/assets/GoogleIcon.png"
                alt="Google"
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <p className="my-2" style={{ fontSize: "14px" }}>
              Don't have account?{"  "}
              <SignUpForm value={" Register"} />
            </p>
          </Form.Group>
        </Modal.Body>
      </Modal>
    </>
  );
}
