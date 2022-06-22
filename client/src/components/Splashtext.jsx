import styled from "styled-components";
// import Login from "./Login";
// import { Link } from 'react-router-dom'
import { Button } from "@material-ui/core";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Register from "./Register";
// import {MDCRipple} from '@material/ripple';
// const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

export default function Splashtext() {
  return (
    <Wrapper>
      <Title>Welcome to COLLAB||8</Title>
      <Description>
        A collaborative tool for web developers and designers
        <br />
        <br />

        <Button
          size="small"
          style={{ fontSize: 24 }}
          href="/Login"
          variant="contained"
          color="secondary"
        >
          Login
        </Button>
        <br />
        <br />

        <Button
          size="small"
          style={{ fontSize: 24 }}
          href="/Register"
          variant="contained"
          color="secondary"
        >
          Register
        </Button>
      </Description>
    </Wrapper>
  );
}

//styling for the splash page textbox that contains title & description
const Wrapper = styled.div`
  position: relative;
  max-width: 500px;
  display: grid;
  gap: 50px;
  text-align: center;
  margin: 0 auto;
  padding: 140px 20px 100px;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-weight: bold;
  font-size: 50px;
`;

const Description = styled.p`
  max-width: 300px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0 auto;
`;
