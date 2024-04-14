import React from "react";
import Home from "./components/Home";
import { Link, Routes, Route } from "react-router-dom";
import User from "./components/User";
import About from "./components/About";
import UserDetails from "./components/UserDetails"

function App() {
  return (
    <div className="p-5">
      <nav className="w-fit bg-black text-white px-5 py-2 rounded-full m-auto font-semibold flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>

      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<UserDetails/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
