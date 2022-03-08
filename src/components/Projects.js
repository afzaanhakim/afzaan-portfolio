import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import { mobile } from "../responsive";
import ProjectList from "./ProjectList";

const Main = styled.div`
overflow:hidden;

`;
const Title = styled.h1`
  color: white;
  text-align: center;
  font-weight: lighter;
  font-size: 60px;
`;

const ProjectContainer = styled.div`
background: black;
margin-right: 10em;
display: contents;
flex-direction:row;
align-items: center;
justify-content:center;
border: red solid 2px;
`

const ProjectListContainer = styled.div`
${mobile({
  })};`

const Projects = () => {
  return (
    <Main>
      <Nav/>
      <ProjectContainer>
      <Title>Projects</Title>
     < ProjectListContainer>
      <ProjectList/>
      </ProjectListContainer>
      </ProjectContainer>
    </Main>
  );
};

export default Projects;
