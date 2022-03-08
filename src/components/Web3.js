import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import Web3list from "./Web3list";
import { mobile } from "../responsive";

const Main = styled.div`
  display: column;
  align-items: center;
  justify-content: center;

  ${mobile({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })};
`;

const Title = styled.h1`
  color: white;
  justify-content: center;
  display: flex;
  font-weight: lighter;
  font-size: 60px;
  align-items: center;

  ${mobile({
    fontSize: "30px",
  })};
`;

const Web3Container = styled.div`
  margin-left: 10px;
  overflow-x: hidden;
  ${mobile({})};
`;

const Web3 = () => {
  return (
    <Main>
      <Nav />
      <Title>Web3 Stuff/NFTs</Title>
      <Web3Container>
        <Web3list />
      </Web3Container>
    </Main>
  );
};

export default Web3;
