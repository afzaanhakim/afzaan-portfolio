import React from "react";
import styled from "styled-components";
import Skill from "./Skill";
import { mobile } from "../responsive";
const Main = styled.div`
display: flex;
flex-direction:column;
align-items: center;
margin-top:30px;

${mobile({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "45px",
    paddingBottom: "20px"
  })}`;
const Title = styled.h1``;
const SkillsContainer = () => {
  return (
    <Main>
      
      <Skill />
    </Main>
  );
};

export default SkillsContainer;
