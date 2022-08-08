import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import WithoutNav from "./layout/WithoutNav";
import WithNav from "./layout/WithNav";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="home" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
