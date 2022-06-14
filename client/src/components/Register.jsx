import React from "react";
import { Link } from "react-router-dom";

export default class Register extends React.Component {
  render() {
    return (
      <div>
        <h1>This is my register page</h1>
        <Link to="/">Go back to home</Link>
      </div>
    );
  }
}