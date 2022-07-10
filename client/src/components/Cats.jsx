import React, {useState, useEffect} from 'react'
import { Container, Grid, Item, MenuList, MenuItem, Card, Divider, CardContent, Typography, Button, Box, CardActions, CardActionArea, CardMedia, Popover } from '@material-ui/core';
import axios from "axios";
import "./Cats.css";

export default function Cats() {

    const [cat, setCat] = useState("")


    const callCatApi = () => {
        axios.get("https://api.thecatapi.com/v1/images/search?mime_types=gif", {
            headers: {
                // "Content-Type": "application/json",
                'x-api-key': process.env.REACT_APP_CAT_API_KEY
              }
        })
        .then(res => {
            setCat(res.data[0].url)
        })
        .catch(error => console.log(error.message))
    }


    useEffect(() => {
        callCatApi();
    }, [])

    
  return (
    <>
    <h2 style={{"textAlign": "center"}}>Look at all the kitties !</h2>
   <img src={cat} />
    <br />
    <div style={{display: "flex", "justifyContent": "center"}}>
    <Button style={{ margin: 17 }} variant="outlined" color="secondary" type="button" onClick={callCatApi}>See a mew cat</Button>
    </div>
    </>
  )
}
// https://api.thecatapi.com/v1/images/searchCat