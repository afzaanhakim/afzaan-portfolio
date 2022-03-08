import React from "react";
import { mobile } from "../responsive";
import styled from "styled-components";
import Nav from "./Nav";

import SkillsContainer from "./SkillsContainer";
import Socials from "./Socials";
const HomeContainer = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const Top = styled.div`
  background: black;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10em;
  ${mobile({
    display: "flex",
    flexDirection: "row",
    paddingBottom: "0em",
    marginBottom: "0em",
    marginTop: "1em",
  })}
`;
const Left = styled.div`
  background: black;
  width: 150%;
  color: white;
  padding-left: 2em;

  ${mobile({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    marginTop: "1em",
    paddingBottom: "1em",
    paddingLeft: "0px",
  })}
`;
const Right = styled.div`
  width: 120%;
  padding-right: 2em;
  ${mobile({
    display: "flex",
    height: "100%",
    width: "100%",
    marginTop: "0",
    paddingRight: "0px",
    justifyContent: "center",
  })}
`;

const Sides = styled.div`
  display: flex;
  flex-direction: row;
  height: 80%;
  justify-content: center;
  padding: "3em";
  ${mobile({ display: "flex", flexDirection: "column", height: "80%" })}
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  overflow: hidden;
  ${mobile({
    overflow: "scroll",
  })}
`;

const TopTitle = styled.h1`
  font-family: "Lobster", cursive;
  color: white;
  font-size: 50px;
  display: flex;
  justify-content: center;
  ${mobile({
    fontSize: "30px",
    color: "white",
    marginBottom: "0px",
    alignItems: "center",
  })}
`;

const TopImage = styled.img`
  width: 60px;
`;

const TechTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 2px;
  border-top-color: antiquewhite;
  border-top-style: dotted;
  margin-top: 10px;
  ${mobile({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4em",
    borderTopStyle: "none",
  })}
`;
const TitleSubheading = styled.h2`
  color: white;
  font-family: "Bitter";
  font-weight: 400;
  ${mobile({ fontSize: "15px", fontWeight: "400", whiteSpace: "wrap" })}
`;
const TopTextContainer = styled.div`
  margin: 20px;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "3em",
    flexWrap: "nowrap",
  })}
`;

const InfoText = styled.p`
  color: white;
  font-family: "Bitter";
  font-size: 20px;
  line-height: 30px;
  text-overflow: initial;
  ${mobile({ fontSize: "19px", wordSpacing: "2px", fontWeight: "light", fontFamily: 'mono' })}
`;
const DownloadCV = styled.button`
  padding: 15px;
  font-family: "Lobster", cursive;
  border-radius: 10px;
  background: yellow;
  cursor: pointer;
  font-weight: bolder;
  margin-bottom: 10px;
  font-size:20px;

  &:hover {
    background: black;
    color: white;
  }
`;

const ButtonLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const InfoContainer = styled.div`
  margin-bottom: 3em;

  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    321deg,
    rgba(167, 19, 44, 0.7903536414565826) 13%,
    rgba(61, 19, 167, 0.7063200280112045) 55%
  );
  border-radius: 10px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 3em;
  margin-left: 3px;
  word-spacing: 1px;
  font-family: "Bitter";
  ${mobile({
    marginBottom: "0em",
    marginTop: "0em",
    background:
      "linear-gradient(321deg, rgba(167, 19, 44, 0.55) 53%, rgba(61, 19, 167, 0.35) 80%)",
      marginLeft: "15px",
      marginRight: "15px"
  })};
`;

const TopDesign = styled.div`
  background: linear-gradient(
    321deg,
    rgba(167, 19, 44, 0.7903536414565826) 27%,
    rgba(61, 19, 167, 0.7063200280112045) 50%
  );
  border-radius: 20px;
  ${mobile({
    background: "black",
  })}
`;

const Home = () => {
  return (
    <Main>
      <Nav />
      <HomeContainer>
        <Top>
          <TopDesign>
            <TopTextContainer>
              <TopTitle>
                Hi, I'm Afzaan.{" "}
                <TopImage src="https://c.tenor.com/cWNgeHY3LTkAAAAi/cookierun-run.gif" />
              </TopTitle>
              <TitleSubheading>
                AWS Certified Cloud Practitioner | Full Stack Developer | WEB3
                Enthusiast
              </TitleSubheading>
            </TopTextContainer>
          </TopDesign>
        </Top>{" "}
        <Sides>
          {" "}
          <Left>
            <InfoContainer>
              <InfoText>
                I am a Marketer turned Full Stack Developer located in Toronto.{" "}
                <br />
                After completing M.Sc Marketing from Johns Hopkins University
                and 4 years of experience in Marketing, Account Management roles
                at various start-ups and companies, I decided to enroll in the
                intense Bootcamp at Lighthouse Labs and graduated in August
                2021. <br />I am passionate about exploring new technologies to
                build tools that help make a difference!{" "}
              </InfoText>
              <DownloadCV>
                <ButtonLink
                  href="https://cloudflare-ipfs.com/ipfs/QmNNr2PTzpzG5LD65EJ6g8webMRdVJ5RFJBJWnhLVME7iq"
                  target="_blank"
                >
                  Download CV
                </ButtonLink>
              </DownloadCV>
            </InfoContainer>
            <TechTitleContainer>
              <h2>Tech Stack</h2>
            </TechTitleContainer>
            <SkillsContainer> </SkillsContainer>
          </Left>{" "}
          <Right>
            <Socials />
          </Right>
        </Sides>
      </HomeContainer>
    </Main>
  );
};

export default Home;
