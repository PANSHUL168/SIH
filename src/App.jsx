import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Forum from "./pages/Forum.jsx";
import Directory from "./pages/Directory";
import Donation from "./pages/Donation";
import Jobs from "./pages/Jobs";
import Events from "./pages/Events.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import NavbarBoot from "./components/navbar/Navbar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavbarBoot/>
      <Routes>
        <Route path="/directory" element={<Directory />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/job" element={<Jobs />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/event" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
