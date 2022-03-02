import logo from "./logo.svg";
import React from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { mobile } from "./responsive";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Web3 from "./components/Web3";

const AppContainer = styled.div`
  height: 100vh;
  background: black;
  overflow: hidden;
  ${mobile({
    overflow: "scroll",
  })}
`;
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/web3" element={<Web3 />} />
    </Routes>
  );
}

export default App;
