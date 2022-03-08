import React from "react";
import styled from "styled-components";
import opensea from "../assets/social_logos/opensea.svg";

import { mobile } from "../responsive";

const Main = styled.div`
  background: linear-gradient(
    321deg,
    rgba(167, 19, 44, 0.7903536414565826) 13%,
    rgba(61, 19, 167, 0.7063200280112045) 55%,
    rgba(145, 19, 167, 0.7063200280112045) 86%
  );
  margin-right: 3em;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  min-height: 30vh;

  ${mobile({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })};
`;

const NFTImage = styled.img`
  border-radius: 30px;
  max-width: 270px;
  padding: 10px;

  ${mobile({
    minWidth: "100%",
    borderRadius: "30px",
  })};
`;

const OSLogo = styled.img``;

const NFTTitle = styled.h1`
  color: white;
  font-family: "Lobster", cursive;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  text-align: center;
  height: 5rem;

  white-space: wrap;
  ${mobile({
    margin: "1rem 1rem 1rem 1rem",
  })};
`;

const NFTLinkText = styled.span`
  text-decoration: none;
  margin-left: 5px;
  color: white;
  font-family: "Bitter";
`;

const CollectionName = styled.span`
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: lighter;
  font-size: 20px;
`;

const OSLink = styled.div`
  margin-top: 10px;
  display: flex;
  background: #2081e2;
  border-radius: 30px;
  padding: 5px 10px;
  align-items: center;
  text-decoration: none;

  cursor: pointer;

  &:hover {
    background: black;
    color: whitesmoke;
  }
`;

const NFTLinkItem = styled.a``;
const Video = styled.video`
  border-radius: 10%;
  min-width: 300px;

  ${mobile({
    minWidth: "80%",
    borderRadius: "40px",
  })};
`;

const TitleImageContainer = styled.div`
  display: inline;
  font-size: 15px;
`;

const NFTMediaContainer = styled.div`
  min-height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })};
`;

const Web3Item = (props) => {
  const { name, image, nftURL, video, collectionName } = props;

  return (
    <Main>
      {" "}
      <TitleImageContainer>
        <NFTTitle>{name}</NFTTitle>{" "}
        <NFTMediaContainer>
          {!video && image && <NFTImage src={image || ""} width={"270px"} />}
          {(video && image && (
            <Video width={"270px"} autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </Video>
          )) ||
            (video && <NFTImage src={video}></NFTImage>)}
        </NFTMediaContainer>
      </TitleImageContainer>
      <NFTLinkItem
        href={nftURL || "https://opensea.io/afzaan"}
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <CollectionName>{collectionName}</CollectionName>
        <OSLink>
          <OSLogo src={opensea} width={"50px"} />{" "}
          <NFTLinkText>View On Opensea</NFTLinkText>
        </OSLink>
      </NFTLinkItem>
    </Main>
  );
};

export default Web3Item;
