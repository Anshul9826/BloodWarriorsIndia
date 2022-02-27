import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindDonar from "./components/Donor/FindDonor";
import Sponsors from "./components/Sponsors/Sponsors";
import DonateNow from "./components/Forms/DonateNow";
import Communities from "./components/Communities/Communities";
import Footer from "./components/Footer/Footer";
import Login from "./components/Forms/Login";
import UserState from "./Store/User/UserState";
import ForgotPasword from "./components/Forms/ForgotPasword";
import SignUp from "./components/Forms/SignUp";

function App() {
  return (
    <>
      <UserState>
        <Router>
          <Header logo={logo} />
          <Routes>
            <Route exact path="/" element={<Home logo={logo} />} />
            <Route exact path="/about" element={<About logo={logo} />} />
            <Route exact path="/login" element={<Login logo={logo} />} />
            <Route exact path="/signup" element={<SignUp logo={logo} />} />
            <Route exact path="/forgot_password" element={<ForgotPasword logo={logo} />} />
            <Route exact path="/donate" element={<DonateNow logo={logo}/>} />
            <Route exact path="/sponsors" element={<Sponsors />} />
            <Route exact path="/find_donors" element={<FindDonar />} />
            <Route exact path="/communities" element={<Communities />} />
          </Routes>
          <Footer />
        </Router>
      </UserState>
    </>
  );
}

export default App;
