import React from "react";
import { mobile } from "../responsive";
import styled, { keyframes } from "styled-components";
import Nav from "./Nav";
import { SiPostgresql } from "react-icons/si";
import SkillsContainer from "./SkillsContainer";
import Socials from "./Socials"
const HomeContainer = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
`;
const Top = styled.div`
  background: black;
  height: 20%;
  ${mobile({
    display: "flex",
    flexDirection: "row",
    paddingBottom:"5em",
    marginBottom: "2em",
  })}
`;
const Left = styled.div`
  background: black;
  width: 80%;
  color: white;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    marginTop: "10px",
    paddingBottom: "10em",
  })}
`;
const Right = styled.div`
  width: 120%;
  ${mobile({
    display: "flex",
    height: "100%",
    width: "100%",
    marginTop: "0",
  })}
`;

const Sides = styled.div`
  display: flex;
  flex-direction: row;
  height: 80%;
  justify-content: center;
  ${mobile({ display: "flex", flexDirection: "column", height: "80%" })}
`;



const Main = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
`;

const TopTitle = styled.h1`
  font-family: "Bitter";
  color: white;
  font-size: 50px;
  ${mobile({ fontSize: "30px", color: "white", marginBottom: "0px" })}
`;

const TechTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 2px;
  border-top-color: antiquewhite;
  border-top-style: dotted;
  ${mobile({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2em",
  })}
`;
const TitleSubheading = styled.h2`
  color: white;
  font-family: "Bitter";
  font-weight: 400;
  ${mobile({ fontSize: "10px",fontWeight:"600",  whiteSpace: "nowrap" })}
`;
const TopTextContainer = styled.div`
  margin: 20px;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1em",
    flexWrap: "nowrap",
  })}
`;

const InfoText = styled.p`
  color: white;
  font-family: "Bitter";
  font-size: 20px;
  padding: 5px;
  ${mobile({ background: "#1363a73d", fontSize: "16px", wordSpacing: "5px" })}
`;
const DownloadCV = styled.button`
  padding: 10px;
  font-family: "Bitter";
  border-radius: 5px;
  background: yellow;
  cursor: pointer;
  font-weight: bolder;
`;

const ButtonLink = styled.a`
text-decoration:none;`

const InfoContainer = styled.div`
  margin: 5px;
  margin-bottom: 0;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1363a73d;
  word-spacing: 1px;
  font-family: "Bitter";
  ${mobile({ marginBottom: "3em", marginTop: "3em", background: "none" })};
`;

const Home = () => {
  return (
    <Main>
      <Nav />
      <HomeContainer>
        <Top>
          <TopTextContainer>
            <TopTitle>Hi, I'm Afzaan.</TopTitle>
            <TitleSubheading>
              AWS Certified Cloud Practitioner | Full Stack Developer | WEB3
              Enthusiast
            </TitleSubheading>
          </TopTextContainer>
        </Top>{" "}
        <Sides>
          {" "}
          <Left>
            <InfoContainer>
              <InfoText>
                I am a Marketer turned Full Stack Developer located in Toronto. <br/>
                After completing M.Sc Marketing from Johns Hopkins
                University and 4 years of experience in Marketing, Account
                Management roles at various start-ups and companies, I decided
                to enroll in the intense Bootcamp at Lighthouse Labs and
                graduated in August 2021. I am passionate about exploring new technologies to build tools that help make a difference!{" "}
              </InfoText>
              <DownloadCV><ButtonLink href="https://cloudflare-ipfs.com/ipfs/QmNNr2PTzpzG5LD65EJ6g8webMRdVJ5RFJBJWnhLVME7iq" target="_blank">Download CV</ButtonLink></DownloadCV>
            </InfoContainer>
            <TechTitleContainer>
              <h2>Tech Stack</h2>
              <SkillsContainer> </SkillsContainer>
            </TechTitleContainer>
          </Left>{" "}
          <Right><Socials> </Socials></Right>
        </Sides>
      </HomeContainer>
    </Main>
  );
};

export default Home;
