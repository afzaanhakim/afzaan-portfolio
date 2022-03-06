import React from "react";
import ProjectItem from "./ProjectItem";
import styled from "styled-components";
import { projectData } from "../projectData";
import { mobile } from "../responsive";

const Main = styled.div`
  width: 95vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));
  grid-row-gap: 20px;
  border-radius: 14px;
  padding: 2em;
  ${mobile({
   marginRight:"4em",
   padding:"1.2em"
  })}
  
`;

const allData = projectData.map((card, i) => {
  return (
    <ProjectItem
      key={card.id}
      projectTitle={card.title}
      projectDescription={card.description}
      projectTech={card.techStack}
      projectImage={card.image}
      projectURL={card.url}
      projectBackend={card.github_repo_be}
      projectFrontend={card.github_repo_fe}
    />
  );
});
const ProjectList = () => {
  return <Main>{allData}</Main>;
};

export default ProjectList;
