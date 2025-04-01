import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home";
import About from "./Component/About";
import Timer from "./Component/Simple Timer/Timer";
import Age from "./Component/Age Calculator/Age";
import Login from "./Component/UncontrolLogin/Login";
import LoginC from "./Component/ControlLogin/LoginC";






function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center mb-4">All Applications</h1>
        
        {/* Cards for Navigation */}
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-lg">
              <div className="card-body text-center">
                <h5 className="card-title">🏠 Home</h5>
                <p className="card-text">Go to Home Page</p>
                <Link to="/" className="btn btn-primary">Open</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-lg">
              <div className="card-body text-center">
                <h5 className="card-title">ℹ️ About</h5>
                <p className="card-text">Learn more about us</p>
                <Link to="/about" className="btn btn-primary">Open</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-lg">
              <div className="card-body text-center">
                <h5 className="card-title">Uncontrol Login</h5>
                <p className="card-text">Registration page</p>
                <Link to="/login" className="btn btn-primary">Open</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-lg">
              <div className="card-body text-center">
                <h5 className="card-title">control Login</h5>
                <p className="card-text">Registration page</p>
                <Link to="/loginC" className="btn btn-primary">Open</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-lg">
              <div className="card-body text-center">
                <h5 className="card-title">⏳ Timer</h5>
                <p className="card-text">Simple Timer App</p>
                <Link to="/timer" className="btn btn-primary">Open</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-4">
            <div className="card shadow-lg">
              <div className="card-body text-center">
                <h5 className="card-title">📅 Age Calculator</h5>
                <p className="card-text">Calculate Your Age</p>
                <Link to="/age" className="btn btn-primary">Open</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/age" element={<Age />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginC" element={<LoginC />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
