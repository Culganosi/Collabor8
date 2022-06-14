import "./Login.css";
import Navbar from "./Navbar";
// import "./styles.css";
import { ThemeProvider } from "@mui/material/styles";
import { Button, Container, Input, Paper } from "@mui/material";

// import React, {useState, Form, Button} from 'react';

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  return (
    <div>Hi</div>
  //   <div className="Login">
  //     <Form onSubmit={handleSubmit}>
  //       <Form.Group size="lg" controlId="email">
  //         <Form.Label>Email</Form.Label>
  //         <Form.Control
  //           autoFocus
  //           type="email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //         />
  //       </Form.Group>
  //       <Form.Group size="lg" controlId="password">
  //         <Form.Label>Password</Form.Label>
  //         <Form.Control
  //           type="password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //       </Form.Group>
  //       <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
  //         Login
  //       </Button>
  //     </Form>
  //   </div>
  );
}