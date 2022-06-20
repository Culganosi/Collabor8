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
    axios.post("/chats", {recipientId: author._id, firstMessageText: `Connection created on ${Date.now()}`, type: "init"})
    .then(() => {
        navigate("/chat")
    })
  }

  
  //------------------REFRESH

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
  <Box p={5}>
    <div className={classes.card}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={6} md={4} lg={4} style={{ display: 'flex', justifyContent: "center" }}>
          <Paper className={classes.content} elevation={8} style={{ display: 'flex', justifyContent: "center" }}>
            <CardContent>
              <img src={author.avatar}
                className={classes.userprofileavatar}
                alt="user profile"
              />

              <Typography className={classes.title} component="h5" variant="h5" color="secondary" style={{ display: 'flex', justifyContent: "center" }}>
              <Link to={`/People/${author._id}`}>
                {author.userhandle}
              </Link>
              </Typography>

              <Typography
                className={classes.title}
                variant="h6"
                color="textSecondary"
                style={{ display: 'flex', justifyContent: "center" }}>
                {author.role}
              </Typography>
              <Typography className={classes.bio}></Typography>
              <Box textAlign="center">

              {chatId? 

                //If the user logged in already has a connection with the otherUser
                <Button
                  onClick={goToChat}
                  style={{ margin: 2 }}
                  style={{
                    borderRadius: 10,
                    backgroundColor: "#21b6ae",
                    padding: "5px 10px",
                    fontSize: "10px",
                  }}
                  variant="contained"
                >
                  Send a Message
                  <EmailIcon />
                </Button>

                :

                //If no chat connection exists yet
                <Button
                  onClick={makeNewChat}
                  style={{ margin: 2 }}
                  style={{
                    borderRadius: 10,
                    backgroundColor: "#21b6ae",
                    padding: "5px 10px",
                    fontSize: "10px",
                  }}
                  variant="contained"
                >
                  Make a connection
                  <EmailIcon />
                </Button>

                }

              </Box>
            </CardContent>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Paper className={classes.content} elevation={8}>
            <CardContent className={classes.cardContent}>
              <Typography component="h5" variant="h5" color="secondary">
                {proposal.title}
              </Typography>

              <img src={proposal.image}
                className={classes.proposalImg}
                alt="proposal img"
              />
              
              <Typography className={classes.title} variant="h6" color="textSecondary">
                Looking for: {proposal.seeking && proposal.seeking.join(", ")}
              </Typography>
              <Typography className={classes.bio}>
                {proposal.description}
              </Typography>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </div>
  </Box>
);
}


