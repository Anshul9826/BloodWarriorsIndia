import logo from "./logo1.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindDonar from "./components/Donor/FindDonor";
import Sponsors from "./components/Sponsors/Sponsors";
import DonateNow from "./components/Donate/DonateNow";
import Communities from "./components/Communities/Communities";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header logo={logo} />
        <Routes>
          <Route exact path="/" element={<Home logo={logo} />} />
          <Route exact path="/about" element={<About logo={logo} />} />
          <Route exact path="/donate" element={<DonateNow />} />
          <Route exact path="/sponsors" element={<Sponsors />} />
          <Route exact path="/find_donors" element={<FindDonar />} />
          <Route exact path="/communities" element={<Communities />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
