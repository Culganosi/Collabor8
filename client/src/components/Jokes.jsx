import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import FlipCard from "./FlipCard";

export default function Jokes() {
  const [jokeSetup, setJokeSetup] = useState("");
  const [jokeDelivery, setJokeDelivery] = useState("");

  const callJokeApi = () => {
    axios
      .get(
        "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart"
      )
      .then((res) => {
        setJokeSetup(res.data.setup)
        setJokeDelivery(res.data.delivery)
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    callJokeApi();
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>A joke for you</h2>


      <FlipCard setup={jokeSetup} delivery={jokeDelivery}/>


      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{ margin: 17 }}
          variant="outlined"
          color="secondary"
          type="button"
          onClick={callJokeApi}
        >
          More jokes pls
        </Button>
      </div>
    </>
  );
}
