import * as React from "react";
import { useEffect, useContext, useState} from "react";
import Paper from "@material-ui/core/Paper";
import useStyles from "../styles";
import axios from "axios";
import { DataContext } from "./../DataContext";
import OtherProfile from "./OtherProfile";
import { Link } from "react-router-dom";
import {useParams, useNavigate} from 'react-router-dom';
import EmailIcon from "@mui/icons-material/Email";

import {
  Typography,
  Button,
  Box,
  CardContent,
  Container,
  Grid,
} from "@material-ui/core";



export default function OthersProp() {

  const classes = useStyles();

  const {setActiveChatId} = useContext(DataContext);


  const [proposal, setProposal] = useState({})
  const [author, setAuthor] = useState({});
  const [chatId, setChatId] = useState("")

  const navigate = useNavigate();

  const params = useParams();
  const proposalId = params.id


  //-----------------HELPER FUNCTIONS

  const goToChat = () => {
    setActiveChatId(chatId)
    navigate("/Chat")
  }

  const makeNewChat = () => {
    //Axios post with new message, then navigate to chat
    axios.post("/chats", {recipientId: author._id, firstMessageText: `Connection created on ${Date.now()}`})
    .then((res) => {
        setActiveChatId(res.data.chatId)
        navigate("/chat")
    })
  }

  
  //------------------REFRESH

    //Scroll to top when entering page
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    

  //Get info about the proposal and author
  useEffect(() => {

    async function getInfo () {

      const proposalResponse = await axios.get(`/proposals/${proposalId}`)
      setProposal(proposalResponse.data)

      const authorId = proposalResponse.data.author

      const authorResponse = await axios.get(`/users/${authorId}`) 
      setAuthor(authorResponse.data)
    }

    getInfo()

  }, []);

    //See if the person logged in has a chat connection to the author
    useEffect(() => {
      axios.get("/chats/self/chat-previews")
      .then(res => {
        console.log("The response")
        console.log(res.data)
        const chatPreviews = res.data
        for (let chat of chatPreviews) {
          if (chat.partner == author._id) {
            setChatId(chat._id)
          }
        }
      })
    }, [author])


    //----------------RENDER

return (
    <div className={classes.container}>

        <Grid container justify="center">
          <Grid item xs={9}>
            <Paper className={classes.createprofile} elevation={2}>
              <CardContent className={classes.cardContent} style={{display: "flex", justifyContent: "space-between"}}>


                {/* LEFT SIDE */}
                
                <div style={{borderRight: "1px solid lightgrey", paddingRight: "80px"}}>

              <img src={author.avatar}
                className={classes.userprofileavatar}
                alt="user profile"
                style={{
                  width: 120, height: 120, objectFit: "cover", margin: 0, padding: 0
              }}
              />
              

              <Link to={`/People/${author._id}`} style={{textDecoration: "none"}}>
              <Typography className={classes.title} component="h5" variant="h5" color="secondary" style={{ textAlign: "center"}}>
                {author.userhandle}
              </Typography>
              </Link>

              <Typography
                className={classes.title}
                variant="h6"
                color="textSecondary"
                style={{ textAlign: "center", padding: 0, marginTop: 15}}>
                {author.role}
              </Typography>
              {/* <Typography className={classes.bio}></Typography> */}
              <Box textAlign="center" style={{padding: 0, marginTop: 15}}>

              {chatId ?
                      //If the user logged in already has a connection with the otherUser
                      <Button size="small" variant="contained" color="secondary" onClick={goToChat}>
                        Message
                      </Button>

                      :
                      
                      //Otherwise, create connection
                      <Button size="small" variant="contained" color="secondary" onClick={makeNewChat}>
                        Connect
                      </Button>
              }

              </Box>



                </div>


                {/* RIGHT SIDE */}
                <div style={{paddingLeft: "80px"}}>

                <Typography component="h5" variant="h4" color="secondary" style={{textAlign: "left", marginBottom: 15}}>
                {proposal.title}
                </Typography>

              <img src={proposal.image}
                className={classes.proposalImg}
                alt="proposal img"
                style={{borderRadius: "10px", width: "400px", height: "225px", objectFit: "cover", padding: 0, margin: 0}}
              />
              
              <Typography className={classes.title} variant="h6" color="textSecondary">
                Looking for: {proposal.seeking && proposal.seeking.join(", ")}
              </Typography>
              <Typography className={classes.bio}>
                {proposal.description}
              </Typography>


                </div>

              </CardContent>
              </Paper>
          </Grid>
        </Grid>


  </div>
)}


