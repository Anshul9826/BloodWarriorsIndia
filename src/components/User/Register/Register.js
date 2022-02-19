import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

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

function Register({ Icon, title },props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bloodGroup, setbloodGroup] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  let navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClose();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
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
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      alert("Account created successfully!");
    } else {
      alert("Please fill the form correctly!");
    }
  };
  return (
    <>
      <div
        className="d-flex flex-column align-items-center"
        onClick={handleOpen}
      >
        {Icon && <Icon fontSize="large" style={{ color: "red" }} />}
        <h6 className="mb-0" style={{ color: "white" }}>
          {title}
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
                required
              />
              <input
                className="me-0"
                type="name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email or Mobile number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="d-flex my-1 justify-content-between" style={{width:"100%"}}>
              <FormControl variant="filled" sx={{ minWidth: 160}}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  style={{ backgroundColor: "white" }}
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
              </FormControl>
              <FormControl variant="filled" sx={{ minWidth: 160}}>
                <InputLabel id="demo-simple-select-label">
                  Blood Group
                </InputLabel>
                <Select
                  style={{ backgroundColor: "white" }}
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
              </FormControl>
              <div className="">
                <input
                className="m-0 p-3"
                  type="date"
                  id="dob"
                  name="dateOfBirth"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                />
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <div className="d-flex">
                <input
                  className="ms-0"
                  type="name"
                  name="country"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
                <input
                  className="me-0"
                  type="name"
                  name="state"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>
              <div className="d-flex">
                <input
                  className="ms-0"
                  type="name"
                  name="pinCode"
                  placeholder="Pin Code"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  required
                />
                <input
                  className="me-0"
                  type="name"
                  name="city"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <input
                className="ms-0"
                type="name"
                name="street"
                placeholder="Street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                required
              />
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
export default Register;
