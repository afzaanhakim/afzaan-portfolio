import React from "react";

import styled from "styled-components";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import { ImHome } from "react-icons/im";
import { FaBolt, FaEthereum } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import ahlogo from "../assets/ahlogo.png";
import { mobile } from "../responsive";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  margin-right: 10px;
  ${mobile({ display: "flex", flexDirection: "column", marginTop: "0px", marginRight: "0px" })}
`;
const NavItemsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ display: "flex", flexDirection: "column", marginTop: "0" })}
  
`;

const IconContainer = styled.div`
  display: flex;
  
  
`;

const Icon = styled.div`
  padding: 12px;
  margin-left: 15px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50px;
  ${mobile({ background: "none", marginLeft: "8px", marginTop: "0px", borderRadius: "20px" })}
  &:hover {
    background:#dd16d17a;
    cursor: pointer;
    color: black;
  }
`;

const LogoImage = styled.img`
  width: 50%;
  ${mobile({ width: "60%" })}

`;

const IconHeading = styled.span`
  margin-top: 10px;
  font-family: 'Bitter';
  ${mobile({ color: "white" })}
  color: white;;
  font-weight: bold;

`;
const Heading = styled.div`
  display: flex;
  margin:15px 15px 0px 15px;;
  ${mobile({ alignItems: "center", justifyContent: "center", marginTop: "10px;" })}
`;
const Title = styled.h1`
  white-space: nowrap;
  font-size: 30px;
  font-family: Poppins;
`;

const Nav = () => {
  return (
    <NavContainer>
      <Heading>
        <LogoImage src={ahlogo} />
      </Heading>
      <NavItemsContainer>
        <IconContainer>
          <Icon>
            <ImHome color={"green"} size={"40px"} />
            <IconHeading>Home</IconHeading>
          </Icon>
          <Icon>
            <FaBolt color="yellow" size={"40px"} />
            <IconHeading>Projects</IconHeading>
          </Icon>
          <Icon>
            <FaEthereum color="purple" size={"40px"} />
            <IconHeading>Web3</IconHeading>
          </Icon>
          <Icon>
            <FiMail color="white" size={"40px"} />
            <IconHeading>Contact</IconHeading>
          </Icon>
        </IconContainer>
      </NavItemsContainer>
    </NavContainer>
  );
};

export default Nav;
