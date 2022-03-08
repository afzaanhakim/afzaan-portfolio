import React from "react";

import styled from "styled-components";
import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import { ImHome } from "react-icons/im";
import { FaBolt, FaEthereum } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import ahlogo from "../assets/ahlogo.png";
import { mobile } from "../responsive";
import { useNavigate } from "react-router";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  margin-right: 10px;
  margin-top: 15px;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    marginTop: "0px",
    marginRight: "0px",
  })}
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
  background: linear-gradient(
    321deg,
    rgba(167, 19, 44, 0.7903536414565826) 53%,
    rgba(61, 19, 167, 0.7063200280112045) 85%
  );
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;

  ${mobile({
    borderTopRightRadius: "40px",
    borderBottomRightRadius: "40px",
    padding: "0px 10px",
    background:
      "linear-gradient(321deg, rgba(167, 19, 44, 0.55) 53%, rgba(61, 19, 167, 0.35) 80%)",
  })}
`;

const Icon = styled.div`
  padding: 12px;
  margin-left: 5em;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50px;
  ${mobile({
    background: "none",
    marginLeft: "8px",
    marginTop: "0px",
    borderRadius: "20px",
  })}
  &:hover {
    background: #dd16d17a;
    cursor: pointer;
    color: black;
    border-radius: 10%;
  }

  &:active {
background: white;
  }
`;

const LogoImage = styled.img`
  width: 50%;
  ${mobile({ width: "60%" })}
`;

const IconHeading = styled.span`
  margin-top: 10px;
  font-family: "Lobster", cursive;
  ${mobile({ color: "white", fontWeight: "200" })}
  color: white;
  font-weight: bold;
`;
const Heading = styled.div`
  display: flex;
  margin: 15px 15px 0px 15px;
  background: linear-gradient(
    321deg,
    rgba(167, 19, 44, 0.7903536414565826) 10%,
    rgba(61, 19, 167, 0.7063200280112045) 41%
  );
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  ${mobile({
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
    background: "none",
  })}
`;
const Title = styled.h1`
  white-space: nowrap;
  font-size: 30px;
  font-family: Poppins;
`;

const Nav = () => {
  const history = useNavigate();

  const onProjectsClick = () => {
    return history("/projects");
  };

  const onHomeClick = () => {
    return history("/")
  }

  const onWeb3Click = () => {
    return history("/web3")
  }

  return (
    <NavContainer>
      <Heading>
        <LogoImage src={ahlogo} />
      </Heading>
      <NavItemsContainer>
        <IconContainer>
          <Icon onClick={onHomeClick}>
            <ImHome color={"green"} size={"40px"} />
            <IconHeading>Home</IconHeading>
          </Icon>
          <Icon onClick={onProjectsClick}>
            <FaBolt color="yellow" size={"40px"}  />
            <IconHeading>Projects</IconHeading>
          </Icon>
          <Icon onClick={onWeb3Click}>
            <FaEthereum color="grey" size={"40px"}  />
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
