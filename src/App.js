import logo from "./logo1.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header logo={logo} />
        <Routes>
          <Route exact path="/" element={<Home logo={logo} />} />
          <Route exact path="/about" element={<About logo={logo} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
