import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Form.css";

export default function SignUpForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");

  const [signUpShow, setSignUpShow] = useState(false);

  const handleSignUpShow = () => setSignUpShow(true);
  const handleSignUpClose = () => setSignUpShow(false);

  const onSignUpFormSubmit = (e) => {
    e.preventDefault();
    handleSignUpClose();
  };
  return (
    <>
      <Link to="/" onClick={handleSignUpShow}>
        {props.value}
      </Link>
      <Modal show={signUpShow} onHide={handleSignUpClose} centered>
        <Modal.Body className="form-control">
          <Form
            className="d-flex flex-column align-items-center p-4"
            onSubmit={props.onSubmit}
          >
            <div className="d-flex mb-2">
              <input
                className="me-2 p-2 rounded-2 form-control"
                type="name"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <input
                className="p-2 rounded-2 form-control"
                type="name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <input
              className="m-2 p-2 rounded-2 form-control"
              type="email"
              placeholder="Email or Mobile number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="m-2 p-2 rounded-2 form-control"
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label
              className="my-2 me-auto"
              htmlFor="Gender"
              style={{ fontSize: "16px" }}
            >
              Gender:
            </label>
            <div className="d-flex justify-content-between form-control bg-transparent border-0 p-0 m-0">
              <div className="genderCheck">
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
              <div className="genderCheck">
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
              <div className="genderCheck">
                <label htmlFor="trans">Trans</label>
                <input
                  type="radio"
                  name="gender"
                  id="trans"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
              <div className="genderCheck">
                <label htmlFor="other">Other</label>
                <input
                  type="radio"
                  name="gender"
                  id="other"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </div>
            <div className="d-flex justify-content-between form-control bg-transparent border-0 p-0 my-2 mb-0">

            <label
              className="me-auto"
              htmlFor="birthDate"
              style={{ fontSize: "16px", color:"white" }}
            >
              Date Of Birth:
            </label>
            <label
              className="ms-auto"
              htmlFor="birthDate"
              style={{ fontSize: "16px", color:"white" }}
            >
              Blood Group: 
            </label>
            </div>
            <div className="d-flex form-control border-0 bg-transparent p-0">
              <input
                className="form-control me-2 p-2"
                type="date"
                id="birthday"
                name="birthday"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
              <div
                className="input-group form-control"
                style={{ background: "lightgrey" }}
              >
                <select className="form-select bg-tranparent" id="inputGroupSelect02">
                  <option defaultValue>Choose</option>
                  <option value="1">A+</option>
                  <option value="2">A-</option>
                  <option value="3">B+</option>
                  <option value="3">B-</option>
                  <option value="3">AB+</option>
                  <option value="3">AB-</option>
                  <option value="3">O+</option>
                  <option value="3">O-</option>
                </select>
              </div>
            </div>
            <p className="my-2 p-0" style={{ fontSize: "13px" }}>
              By clicking Sign Up, you agree to our <Link to="/">Terms</Link> ,{" "}
              <Link to="/"> Data Policy</Link> and{" "}
              <Link to="/"> Cookies Policy</Link>. You may receive SMS
              notifications from us and can opt out at any time.
            </p>
            <Button
              className="btn form-control m-0"
              id="loginBtn"
              type="submit"
              onClick={onSignUpFormSubmit}
            >
              Sign Up
            </Button>

            <h6 className="my-2">Or Sign Up with</h6>

            <div className="d-flex">
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
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
