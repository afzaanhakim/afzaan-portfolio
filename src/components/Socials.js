import React from "react";
import styled from "styled-components";
import bgimg from '../assets/skillslogo/bgimg.jpeg'

const Main = styled.div`
  padding-top: 3em;
  padding-bottom: 3em;
  background: url('https://cloudflare-ipfs.com/ipfs/QmebbiGRaSr2QMDpzK3sfFpji93dbUJfPysp5vjur2CVGD') black no-repeat;
  border-radius:50%;
`;
const C1 = styled.div`
  background: ${(props) => props.background};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  padding-left: "1em";
`;

const C2 = styled.div`
  background: ${(props) => props.background};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: 2em;
  border-radius: 50%;
`;
const TopShelf = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  margin-bottom: "3em";
`;

const MiddleShelf = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BottomShelf = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  margin-top: "3em";`

const Title = styled.h1`
  color: white;
`;
const Socials = () => {
  return (
    <Main>
      {" "}
      <TopShelf>
        <C2 background={"blue"} width={"150px"} height={"150px"}></C2>
      </TopShelf>
      <MiddleShelf>
        <C2 background={"blue"} width={"130px"} height={"130px"}></C2>{" "}
        <Title>Socials</Title>{" "}
        <C1 background={"blue"} width={"200px"} height={"200px"}></C1>
      </MiddleShelf>
      <BottomShelf> <C2 background={"blue"} width={"150px"} height={"150px"}></C2></BottomShelf>
    </Main>
  );
};

export default Socials;
