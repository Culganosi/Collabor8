import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";

// https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt
export default function Jokes() {
  const [joke, setJoke] = useState("");

  const callJokeApi = () => {
    axios
      .get(
        "https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart"
      )
      .then((res) => {
        console.log(res);
        setJoke(res.data.setup + " " + res.data.delivery);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    callJokeApi();
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>A joke for you</h2>
      <p>{joke}</p>
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
