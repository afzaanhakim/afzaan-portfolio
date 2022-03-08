import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { mobile } from "../responsive";
import Web3Item from "./Web3Item";

const WALLET_ADDRESS = process.env.REACT_APP_WALLET_ADDRESS;
const url = `https://api.opensea.io/api/v1/assets?owner=${WALLET_ADDRESS}&order_by=pk&order_direction=desc&limit=20&include_orders=true`;
const API_KEY = process.env.REACT_APP_ALCHEMY_API;

const API_URL = process.env.REACT_APP_ALCHEMY_URL;

const Main = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));
  grid-row-gap: 20px;
  border-radius: 14px;

  ${mobile({
    alignItems: "center",
    marginLeft: "3.5%",
  })}
`;

const Web3List = () => {
  const [nftData, setnftData] = useState([]);
  const [polygonData, setPolygonData] = useState([]);

  const config = {
    method: "get",
    url: `${API_URL}?owner=${WALLET_ADDRESS}`,
  };

  useEffect(() => {
    axios(config)
      .then((response) => setPolygonData(response.data.ownedNfts))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const request = axios
      .get(url)
      .then((response) => {
        console.log(response);
        setnftData(response.data.assets);
      })
      .catch((error) => {
        console.log(error);
      });
    return request;
  }, []);

  return (
    <Main>
      {polygonData &&
        polygonData.map((item, i) => {
          return (
            <Web3Item
              key={i}
              name={item.metadata.name}
              image={
                item.metadata.image ||
                "https://art.pixilart.com/1ccb1b2395.gif?v=1469196696"
              }
              video={item.metadata.animation_url || item.metadata.image}
              nftURL={item.permalink}
            />
          );
        })}
      {nftData &&
        nftData.map((item, i) => {
          return (
            <Web3Item
              key={i}
              name={item.name}
              image={
                item.image_url ||
                "https://art.pixilart.com/1ccb1b2395.gif?v=1469196696"
              }
              nftURL={item.permalink || item.metadata.animation_url}
              collectionName={item.collection.name}
            />
          );
        })}
    </Main>
  );
};

export default Web3List;
