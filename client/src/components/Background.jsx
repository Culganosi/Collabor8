import React from "react";
import styled from "styled-components";
import purplewave from "../media/purplewave.webp";

export default function Background() {
  return (
  <Wrapper>
    <purplewave /> 
  </Wrapper>
  )
}
//styling for the background = purplewave image
const Wrapper = styled.div` 
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background: linear-gradient(180deg, #322d6d 6.33%, #663182 39.13%);
  text-align: center;
  overflow: hidden;
`;
