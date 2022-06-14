import styled from "styled-components";
// import Login from "./Login";
// import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
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
        Find the designers abd developers you need to make it work bla bla bla
        <br />
{/* render () {
//   //  <BrowserRouter>
//    <div className="App">
//     <Routes>
//      <Route path="/" exact component={Login} />
//      <Route path="/profile" exact component={Register} />
//      </Routes>
//    </div>
//  </BrowserRouter> 
// } */}
        <Button
          size="small"
          style={{ fontSize: 24 }}
          // href="/Login"
          variant="contained"
          color="secondary"
          >
          Login
        </Button>
        {/* <Button component={Link} to="/Login" variant="contained" color="primary">About Page</Button> */}
        <br />
        
        <Button
          size="small"
          style={{ fontSize: 24 }}
          // href="#"
          variant="contained"
          color="secondary">
          Register          
        </Button>
        {/* </ThemeProvider> */}


        {/* <Button component={Link} to="/Login">Click Me</Button>
         <button>Register</button> */}

      </Description>
    </Wrapper>
  );
}

//styling for the landing page textbox that contains title & description
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