import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import Nav from "./Nav";

function App() {
  const user = { name: "ram" }; // Set to the actual user object if authenticated

  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          {!user ? (
            <Route path="/login" element={<LoginScreen />} />
          ) : (
            <>
              <Route path="/" element={<HomeScreen />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
