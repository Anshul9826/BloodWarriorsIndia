import React, { useState } from "react";
import "./Common.css";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const [errorField, setErrorField] = useState({
    emailErr: "",
    passwordErr: "",
  });
  const validForm = () => {
    let formIsValid = true;
    setErrorField({
      emailErr: "",
      passwordErr: "",
    });
    if (email === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        emailErr: "Email is required!",
      }));
    }
    if (password === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        passwordErr: "Password is required!",
      }));
    }
    return formIsValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validForm()) {
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
      if (json.success) {
        localStorage.setItem("token", json.authToken);
        toast.success(json.msg);
        setTimeout(() => {
          navigate("/");
        }, 2500);
      } else {
        toast.error(json.error);
      }
    } else {
      toast.error("Form is Invalid!");
    }
  };
  return (
    <>
      <div className="formStyle d-flex flex-column align-items-center py-4">
        <ToastContainer />
        <Link to="/">
          <img id="logo" src={props.logo} alt="Blood Warriors" />
        </Link>
        <form id="form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {errorField.emailErr.length > 0 && (
            <span className="error">{errorField.emailErr}</span>
          )}
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {errorField.passwordErr.length > 0 && (
            <span className="error">{errorField.passwordErr}</span>
          )}
          <Button id="Btn" type="submit">
            Login
          </Button>
          <Link
            className="m-1 ms-auto"
            style={{ fontSize: "16px" }}
            to="/forgot_password"
          >
            Forgot Password?
          </Link>
          <h6>Or Login with</h6>
          <div className="d-flex mb-3 my-2">
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
          <div className="d-flex align-items-center mt-3">
            <h6 className="mb-0 me-1">Don't have account?</h6>
            <Link to="/login">Register</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
