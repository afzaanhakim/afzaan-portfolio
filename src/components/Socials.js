import React from "react";
import styled from "styled-components";
import bgimg from "../assets/skillslogo/bgimg.jpeg";
import { mobile } from "../responsive";
import linkedin from "../assets/social_logos/linkedin.png";
import twitter from "../assets/social_logos/twitter.png";
import github from "../assets/social_logos/github.png";
import gmail from "../assets/social_logos/gmail.png";

const Main = styled.div`
  padding-top: 3em;
  padding-bottom: 3em;
  border-radius: 30%;
  background: linear-gradient(
    321deg,
    rgba(19, 159, 167, 0.1) 23%,
    rgba(23, 19, 167, 0.503536414565826) 63%,
    rgba(167, 19, 156, 0.19) 79%
  );
  margin-right: 6em;
  margin-left: 6em;

  ${mobile({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    background:"linear-gradient(321deg, rgba(167, 19, 44, 0.7903536414565826) 53%, rgba(61, 19, 167, 0.7063200280112045) 85%)",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingRight: "0px",
    borderRadius: "40px",
  })}
`;
const C1 = styled.div`
  background: ${(props) => props.background};
  width: 125px;
  height: 125px;
  margin-right: 2em;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}

  &:hover {
    background: black;
  }
`;

const C2 = styled.div`
  background: ${(props) => props.background};
  width: 125px;
  height: 125px;
  margin-left: 2em;
  border-radius: 50%;
  margin-right: "1em";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}

  &:hover {
    background: black;
  }
`;

const SocialImage = styled.img`
  width: 80px;
  border-radius: 40px;
`;

const MobileSocialImage = styled.img`
  display: none;
  cursor: pointer;
  ${mobile({
    display: "flex",
    width: "50px",
    borderRadius: "40px",
    margin: "10px",
  })}
`;
const TopShelf = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  margin-bottom: "3em";
  ${mobile({
    display: "none",
  })}
`;

const MiddleShelf = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    display: "none",
  })}
`;

const MobileSocials = styled.div`
  background: none;
  display: "none",
    ${mobile({
      width: "50%",
      height: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    })};
`;

const BottomShelf = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  margin-top: "3em";
  ${mobile({
    display: "none",
  })}
`;

const SocialContainer = styled.div`
  display: "hidden";
  ${mobile({
    display: "flex",
    flexDirection: "row",
    padding: "5px",
    justifyContent: "center",
  })}
`;

const Title = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: 200;
  text-align: center;
  ${mobile({
    display: "none",
  })}
`;
const SocialText = styled.span`
  color: white;
  margin-top: 4px;
`;

const SocialLink = styled.a`
  text-decoration: none;
`;

const Socials = () => {
  return (
    <Main>
      {" "}
      <TopShelf>
        <SocialLink href="https://www.linkedin.com/in/afzaanh/" target="_blank">
          <C2
            background={
              "linear-gradient(321deg, rgba(167,19,44,0.7903536414565826) 10%, rgba(61,19,167,0.7063200280112045) 41%)"
            }
          >
            <SocialImage src="https://c.tenor.com/KWP6B61DE48AAAAd/teameasil-linkedin.gif" />
            <SocialText> Linkedin </SocialText>
          </C2>
        </SocialLink>
      </TopShelf>
      <MiddleShelf>
        <SocialLink href="https://github.com/afzaanhakim" target="_blank">
          <C2
            background={
              "linear-gradient(321deg, rgba(167,19,44,0.7903536414565826) 10%, rgba(61,19,167,0.7063200280112045) 41%)"
            }
          >
            {" "}
            <SocialImage src="https://c.tenor.com/UgAnSKyr8DwAAAAi/cat-robot.gif" />
            <SocialText> Github </SocialText>
          </C2>{" "}
        </SocialLink>
        <Title>Connect With Me</Title>{" "}
        <SocialLink href="mailto:afzaanhakim19@gmail.com" target="_blank">
          <C1
            background={
              "linear-gradient(321deg, rgba(167,19,44,0.7903536414565826) 10%, rgba(61,19,167,0.7063200280112045) 41%)"
            }
          >
            <SocialImage src="https://c.tenor.com/E6M-nlmiY14AAAAc/homer-gmail.gif" />
            <SocialText> Gmail </SocialText>
          </C1>
        </SocialLink>
      </MiddleShelf>
      <BottomShelf>
        {" "}
        <SocialLink href="https://github.com/afzaanhakim" target="_blank">
          <C2
            background={
              "linear-gradient(321deg, rgba(167,19,44,0.7903536414565826) 10%, rgba(61,19,167,0.7063200280112045) 41%)"
            }
          >
            {" "}
            <SocialImage
              src="https://c.tenor.com/Fv2O3lSA77AAAAAd/twitter-logo.gif"
              width={"50px"}
            />
            <SocialText> Twitter </SocialText>
          </C2>
        </SocialLink>
      </BottomShelf>
      <MobileSocials>
        <SocialContainer>
          <SocialLink
            href="https://www.linkedin.com/in/afzaanh/"
            target="_blank"
          >
            <MobileSocialImage src={linkedin} />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/afzaanh/"
            target="_blank"
          >
            <MobileSocialImage src={twitter} />
          </SocialLink>
          <SocialLink href="https://github.com/afzaanhakim" target="_blank">
            <MobileSocialImage src={github} />
          </SocialLink>
          <SocialLink href="mailto:afzaanhakim19@gmail.com" target="_blank">
            <MobileSocialImage src={gmail} />
          </SocialLink>
        </SocialContainer>
      </MobileSocials>
    </Main>
  );
};

export default Socials;
