import React from "react";
import styled from "styled-components";
import {
  FaNode,
  FaJs,
  FaGit,
  FaAws,
  FaCss3Alt,
  FaHtml5,
  FaHubspot,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiTailwindcss,
  SiRuby,
  SiRubyonrails,
  SiTableau,
} from "react-icons/si";
import { mobile } from "../responsive";

const SkillImage = styled.img`
  width: 10%;
`;
const Main = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  padding: 0px 50px;
  ${mobile({
    display: "contents",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  })}
`;

const IconContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })}
  
`;
const IconText = styled.span`
  color: white;
`;

const Skill = () => {
  return (
    <Main>
      <IconContainer>
        <FaNode size={"50px"} color={"green"}/>
        <IconText>NodeJS</IconText>
      </IconContainer>
      <IconContainer>
        <FaJs size={"50px"} color={"yellow"}/>
        <IconText>Javascript</IconText>
      </IconContainer>
      <IconContainer>
        <FaCss3Alt size={"50px"} color={"#89B9FB"} />
        <IconText>CSS3</IconText>
      </IconContainer>
      <IconContainer>
        <FaHtml5 size={"50px"} color={"red"}/>
        <IconText>HTML5</IconText>
      </IconContainer>
      <br />
      <IconContainer>
        <SiPostgresql size={"50px"} color={"#89B9FB"} />
        <IconText>PostgreSQL</IconText>
      </IconContainer>
      <IconContainer>
        <FaGit size={"50px"} color={"red"}/>
        <IconText>Git</IconText>
      </IconContainer>
      <IconContainer>
        <FaAws size={"50px"} color={"#ff9903"}/>
        <IconText>AWS</IconText>
      </IconContainer>
      <IconContainer>
        <FaHubspot size={"50px"} color={"#ff9903"}/>
        <IconText>Hubspot</IconText>
      </IconContainer>
      <IconContainer>
        <SiTailwindcss size={"50px"} color={"#89B9FB"} />
        <IconText>TailwindCSS</IconText>
      </IconContainer>
      <IconContainer>
        <SiTableau size={"50px"} color={"4c46fc"}/>
        <IconText>Tableau</IconText>
      </IconContainer>
    </Main>
  );
};

export default Skill;
