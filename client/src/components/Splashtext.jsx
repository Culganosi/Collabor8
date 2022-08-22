import styled from "styled-components";
import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";
import { DataContext } from "./../DataContext";
import { useNavigate } from "react-router-dom";

export default function Splashtext() {
  const navigate = useNavigate();
  const { setSelf } = useContext(DataContext);

  //FUNCTION TO LOG IN AS DEMO USER
  const demoLogin = () => {
    axios
      .post("/api/auth/in", { userhandle: "DemoUser", password: "123" })
      .then((response) => {
        setSelf(response.data);
      })
      .then(() => navigate("/Home"))
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <h1 className="welcome">COLLAB||8</h1>
      <Description>
        <h2>A collaborative platform for web developers and designers</h2>
        <br />
        <br />
        <Button
          size="small"
          style={{ fontSize: 24, margin: "0px 0px" }}
          href="/Register"
          variant="contained"
          color="secondary"
        >
          Register
        </Button>
        {/* <br />
        <br /> */}
        <Button
          size="small"
          style={{ fontSize: 24 }}
          href="/Login"
          variant="outlined"
          color="secondary"
        >
          Login
        </Button>

        <br />
        <DemoLogin type="button" onClick={() => demoLogin()}>
          Demo login
        </DemoLogin>
      </Description>
    </Wrapper>
  );
}

//styling for the splash page textbox that contains title & description
const Wrapper = styled.div`
  position: relative;
  max-width: 600px;
  display: grid;
  gap: 50px;
  text-align: center;
  margin: 0 auto;
  padding: 120px 0px 50px;
`;

const Description = styled.p`
  max-width: 400px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: normal;
  font-size: 17px;
  line-height: 180%;
  margin: 0 auto;
  margin-top: -30px;
  padding: 0;
`;

const DemoLogin = styled.p`
  margin-top: 15px;
  opacity: 40%;
  font-size: 20px;
  &:hover {
    opacity: 100%;
  }
`;
