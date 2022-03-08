import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { mobile } from "../responsive";

import { FaGithub, FaGlobe } from "react-icons/fa";
const Main = styled.div`
  /* overflow: hidden;
  background: white;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-self: center;
  align-self: center;
  margin: 0em 1em 0em 1em;
  align-items: center;
  border-radius: 30px;
  color: white;
  min-height: 30vh;

  background: linear-gradient(
    321deg,
    rgba(19, 159, 167, 0.1) 23%,
    rgba(23, 19, 167, 0.503536414565826) 63%,
    rgba(167, 19, 156, 0.19) 79%
  );

  &:hover {
    color: white;
    background: black;
  }

  ${mobile({
    display: "flex",
    flexDirection: "column",
    margin: "1rem 0.6rem",
    maxWidth: "85%",
    justifySelf: "self-end",
    padding: "2rem 1.8rem",
  })} */
  background: linear-gradient(
    321deg,
    rgba(19, 159, 167, 0.1) 23%,
    rgba(23, 19, 167, 0.503536414565826) 63%,
    rgba(167, 19, 156, 0.19) 79%
  );
  margin-right: 3em;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  min-height: 30vh;
  color: white;

  ${mobile({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })};
`;

const ProjectTitle = styled.h2`
  color: inherit;
  margin: 0 10px;

  ${mobile({
    fontSize: "15px",
    marginTop: "10px",
  })}
`;

const ProjectImage = styled.img`
  max-width: 360px;
  border-radius: 30px;
  border: double black 6px;

  ${mobile({
    width: "360px",
    borderRadius: "90px",
    margin: "0 90px",
  })}
`;

const ImageContainer = styled.div`
  margin-top: 30px;

  ${mobile({
    marginRight: "7px",
  })}
`;

const Left = styled.div`
  background: black;
  width: 100%;
  display: flex;
  color: inherit;
  align-items: baseline;
  justify-content: center;
  border-radius: 10px;
  font-size: 12px;

  ${mobile({
    fontSize: "10px",
  })}
`;
const Right = styled.div`
  margin-top: 10px;
  background: linear-gradient(
    321deg,
    rgba(167, 19, 44, 0.55) 53%,
    rgba(61, 19, 167, 0.35) 80%
  );
  align-items: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  justify-content: center;
  height: 200%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  color: white;
  margin-bottom: 15px;

  &:hover {
    color: white;
    background: linear-gradient(
      321deg,
      rgba(167, 19, 44, 0.55) 53%,
      rgba(61, 19, 167, 0.35) 80%
    );
  }
  ${mobile({})}
`;
const Aside = styled.div``;

const LinkTitle = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  color: white;
  border-radius: 10%;
  padding: 10px;
  min-width: fit-content;
  cursor: pointer;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    color: yellow;
  }
`;
const LinkText = styled.span`
  margin-top: 15px;
  color: white;
  white-space: nowrap;
  font-family: "mono", cursive;
`;

const StackLabel = styled.span`
  color: white;
  font-size: 11px;
  padding: 0 5px;

  ${mobile({
    fontSize: "9px",
    padding: "0 5px",
  })}
`;
const ProjectDescription = styled.div`
  padding: 0 10px;
`;
const ProjectDescText = styled.p`
  color: inherit;
  font-family: "Bitter";
  min-height: 10vh;
`;

const TechStackUsed = styled.h3`
  display: flex;
  color: white;
  flex-direction: row;
  font-size: 12px;
  white-space: nowrap;
  ${mobile({
    fontSize: "9.5px",
  })}
`;

const ProjectItem = (props) => {
  const {
    projectTitle,
    projectBackend,
    projectFrontend,
    projectDescription,
    projectTech,
    projectImage,
    projectURL,
  } = props;
  const techStack = projectTech.map((item, i) => {
    return <TechStackUsed key={i}>| {item} &nbsp; </TechStackUsed>;
  });
  return (
    <Main>
      <ImageContainer>
        <ProjectImage src={projectImage} />
      </ImageContainer>
      <ProjectTitle>{projectTitle}</ProjectTitle>
      <ProjectDescription>
        <ProjectDescText>{projectDescription}</ProjectDescText>

        <Aside>
          <Left>
            <StackLabel>Tech Used:</StackLabel> &nbsp; {techStack}
          </Left>
          <Right>
            {projectFrontend && (
              <LinkTitle href={projectFrontend} target="_blank">
                <FaGithub size="40px" /> <LinkText>Frontend </LinkText>
              </LinkTitle>
            )}{" "}
            {projectURL && (
              <LinkTitle href={projectURL} target="_blank">
                <FaGlobe size="40px" />
                <LinkText>LIVE </LinkText>
              </LinkTitle>
            )}
            {projectBackend && (
              <LinkTitle href={projectBackend} target="_blank">
                <FaGithub size="40px" />
                <LinkText>Back-end </LinkText>
              </LinkTitle>
            )}
          </Right>
        </Aside>
      </ProjectDescription>
    </Main>
  );
};

export default ProjectItem;
