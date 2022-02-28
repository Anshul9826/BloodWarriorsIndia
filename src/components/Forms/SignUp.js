import React, { useState } from "react";
import "./Common.css";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function SignUp(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bloodGroup, setbloodGroup] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  let navigate = useNavigate();

  const [errorField, setErrorField] = useState({
    firstNameErr: "",
    lastNameErr: "",
    emailErr: "",
    passwordErr: "",
    cpasswordErr: "",
    dateOfBirthErr: "",
    bloodGroupErr: "",
    genderErr: "",
    countryErr: "",
    stateErr: "",
    pinCodeErr: "",
    cityErr: "",
    streetErr: "",
  });
  const validForm = () => {
    let formIsValid = true;
    setErrorField({
      firstNameErr: "",
      lastNameErr: "",
      emailErr: "",
      passwordErr: "",
      cpasswordErr: "",
      dateOfBirthErr: "",
      bloodGroupErr: "",
      genderErr: "",
      countryErr: "",
      stateErr: "",
      pinCodeErr: "",
      cityErr: "",
      streetErr: "",
    });
    if (firstName === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        firstNameErr: "Field is required and atleast 3 characters!",
      }));
    }
    if (lastName === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        lastNameErr: "Field is required and atleast 3 characters!",
      }));
    }
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
        passwordErr: "Field is required and atleast 5 characters!",
      }));
    }
    if (cpassword === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        cpasswordErr: "Field is required and atleast 5 characters!",
      }));
    }
    if (cpassword !== password) {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        cpasswordErr: "Passwords should be same!",
      }));
    }
    if (dateOfBirth === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        dateOfBirthErr: "Field is required!",
      }));
    }
    if (gender === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        genderErr: "Field is required!",
      }));
    }
    if (bloodGroup === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        bloodGroupErr: "Field is required!",
      }));
    }
    if (country === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        countryErr: "Field is required and atleast 3 characters!",
      }));
    }
    if (city === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        cityErr: "Field is required and atleast 3 characters!",
      }));
    }
    if (state === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        stateErr: "Field is required and atleast 3 characters!",
      }));
    }
    if (street === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        streetErr: "Field is required and atleast 3 characters!",
      }));
    }
    if (pinCode === "") {
      formIsValid = false;
      setErrorField((prevState) => ({
        ...prevState,
        pinCodeErr: "Field is required and atleast 5 characters!",
      }));
    }
    return formIsValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validForm()) {
      const response = await fetch(
        "http://localhost:5000/api/auth/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
            dateOfBirth,
            bloodGroup,
            gender,
            country,
            state,
            pinCode,
            street,
            city,
          }),
        }
      );
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
            className="ms-0"
            type="name"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          {errorField.firstNameErr.length > 0 && (
            <span className="error">{errorField.firstNameErr}</span>
          )}
          <input
            className="me-0"
            type="name"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          {errorField.lastNameErr.length > 0 && (
            <span className="error">{errorField.lastNameErr}</span>
          )}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errorField.emailErr.length > 0 && (
            <span className="error">{errorField.emailErr}</span>
          )}
          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errorField.passwordErr.length > 0 && (
            <span className="error">{errorField.passwordErr}</span>
          )}
          <input
            type="password"
            name="cpassword"
            placeholder="Confirm Password"
            value={cpassword}
            onChange={(e) => {
              setCpassword(e.target.value);
            }}
          />
          {errorField.cpasswordErr.length > 0 && (
            <span className="error">{errorField.cpasswordErr}</span>
          )}
          <div className="row" style={{ width: "90%" }}>
            <FormControl
              className="col me-1 my-1"
              variant="filled"
              sx={{ minWidth: 150 }}
            >
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                style={{
                  backgroundColor: "rgb(181 252 255)",
                  border: "1px solid rgb(0, 247, 255)",
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                lable="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                {options.map((option, i) => (
                  <MenuItem key={i} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              {errorField.genderErr.length > 0 && (
                <span className="error">{errorField.genderErr}</span>
              )}
            </FormControl>
            <FormControl
              className="col my-1"
              variant="filled"
              sx={{ minWidth: 150 }}
            >
              <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
              <Select
                style={{
                  backgroundColor: "rgb(181 252 255)",
                  border: "1px solid rgb(0, 247, 255)",
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                lable="Blood Group"
                value={bloodGroup}
                onChange={(e) => setbloodGroup(e.target.value)}
                required
              >
                {bloodOptions.map((items, i) => (
                  <MenuItem key={i} value={items.value}>
                    {items.label}
                  </MenuItem>
                ))}
              </Select>
              {errorField.bloodGroupErr.length > 0 && (
                <span className="error">{errorField.bloodGroupErr}</span>
              )}
            </FormControl>
          </div>
          <input
            className="p-3"
            type="date"
            id="dob"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
          {errorField.dateOfBirthErr.length > 0 && (
            <span className="error">{errorField.dateOfBirthErr}</span>
          )}
          <input
            className="ms-0"
            type="name"
            name="country"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          {errorField.countryErr.length > 0 && (
            <span className="error">{errorField.countryErr}</span>
          )}
          <input
            className="me-0"
            type="name"
            name="state"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
          {errorField.stateErr.length > 0 && (
            <span className="error">{errorField.stateErr}</span>
          )}
          <input
            className="ms-0"
            type="name"
            name="pinCode"
            placeholder="Pin Code"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            required
          />
          {errorField.pinCodeErr.length > 0 && (
            <span className="error">{errorField.pinCodeErr}</span>
          )}
          <input
            className="me-0"
            type="name"
            name="city"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          {errorField.cityErr.length > 0 && (
            <span className="error">{errorField.cityErr}</span>
          )}
          <input
            className="ms-0"
            type="name"
            name="street"
            placeholder="Street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
          {errorField.streetErr.length > 0 && (
            <span className="error">{errorField.streetErr}</span>
          )}
          <p className="my-2 p-0" style={{ fontSize: "13px" }}>
            By clicking Sign Up, you agree to our <Link to="/">Terms</Link> ,{" "}
            <Link to="/"> Data Policy</Link> and{" "}
            <Link to="/"> Cookies Policy</Link>. You may receive SMS
            notifications from us and can opt out at any time.
          </p>
          <Button id="Btn" type="submit" onClick={handleSubmit}>
            Sign Up
          </Button>
          <div className="d-flex align-items-center mt-3">
            <h6 className="mb-0 me-1">Already have account?</h6>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </>
  );
}
const options = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
  {
    label: "Trans",
    value: "Trans",
  },
  {
    label: "Other",
    value: "Other",
  },
];
const bloodOptions = [
  {
    label: "A+",
    value: "A+",
  },
  {
    label: "A-",
    value: "A-",
  },
  {
    label: "B+",
    value: "B+",
  },
  {
    label: "B-",
    value: "B-",
  },
  {
    label: "AB-",
    value: "AB-",
  },
  {
    label: "AB+",
    value: "AB+",
  },
  {
    label: "O+",
    value: "O+",
  },
  {
    label: "O-",
    value: "O-",
  },
];
export default SignUp;
