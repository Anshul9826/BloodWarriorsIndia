import logo from "./logo1.svg";
import "./App.css";
import Header from "./components/Header/Header";
// import Sidebar from "./components/Sidebar/Sidebar";
// import Feed from "./components/Feed/Feed";
// import InformativeContent from "./components/InformativeContent/InformativeContent";
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



      {/* <div className="appBody d-flex justify-content-between">
        <Sidebar />
        <Feed />
        <InformativeContent />
      </div> */}
    </>
  );
}

export default App;
