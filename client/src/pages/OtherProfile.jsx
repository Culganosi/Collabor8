import React, { useState, useEffect, useContext } from "react";
import "./UserProfile.css"
import {
  Container,
  Grid,
  makeStyles,
  MenuList,
  MenuItem,
  Card,
  Divider,
  CardContent,
  Typography,
  Button,
  Box,
  CardActions,
  CardHeader,
  CardActionArea,
  CardMedia,
  Popover,
  Link,
} from "@material-ui/core";
import { styled, Paper, Avatar, Stack } from "@mui/material";
import "./OtherProfile.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import EmailIcon from "@mui/icons-material/Email";
import useStyles from "../styles";
import ProposalCardProfile from "../components/ProposalCardProfile";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { DataContext } from "./../DataContext"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const styles = makeStyles((theme) => ({

  avatar: {
    verticalAlign: "middle",
    marginRight: theme.spacing(1),
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: theme.spacing(2, 2, 0),
  },
  card: {
    margin: 16, //space b/w cards
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 15,
    maxWidth: "270px",
    minWidth: "270px",
    height: "330px",
    backgroundColor: theme.palette.background.card,
  },
  cardContent: {
    padding: theme.spacing(2, 1, 1, 1),
  },
  img: {
display:"flex",
alignItems: "center",
justifycontent:"center",
  }
}));



//styling for when there are no active proposals 
const styleObj = {
  fontSize: 30,
  color: "#DB7093",
  textAlign: "center",
  paddingTop: "70px",
}
export default function OtherProfile() {

  /*
  - If messages the user before - select that chat as the chosen one and proceed to the chat
  - If never messaged the user before - send the init message, get the chat ID, set that as active chat ID, proceed to chat
  */

  const { setActiveChatId } = useContext(DataContext);

  const params = useParams();
  const userId = params.id;

  const [otherUser, setOtherUser] = useState({});
  const [userProposals, setUserProposals] = useState([]);

  const [chatId, setChatId] = useState("")

  const navigate = useNavigate();

  //----------------HELPER FUNCTIONS

  const goToChat = () => {
    setActiveChatId(chatId)
    navigate("/Chat")
  }

  const makeNewChat = () => {
    //Axios post with new message, then navigate to chat
    axios.post("/chats", { recipientId: otherUser._id, firstMessageText: `Connection created on ${Date.now()}` })
      .then((res) => {
        setActiveChatId(res.data.chatId)
        navigate("/chat")
      })
  }


  //-----------------REFRESH

  //Load info about the user and about the proposals
  useEffect(() => {

    Promise.all([
      axios.get(`/users/${userId}`),
      axios.get('/proposals')
    ])
      .then((all) => {
        setOtherUser(all[0].data)
        const proposals = all[1].data
        const tempUserProposals = [];
        for (let proposalId of all[0].data.activeProposals) {
          tempUserProposals.push(proposals[proposalId]);
        }
        setUserProposals(tempUserProposals);
      })

  }, []);

  //See if the person logged in has a chat connection to the otherUser
  useEffect(() => {
    axios.get("/chats/self/chat-previews")
      .then(res => {
        const chatPreviews = res.data
        for (let chat of chatPreviews) {
          if (chat.partner == otherUser._id) {
            setChatId(chat._id)
          }
        }
      })
  }, [otherUser])
  

  const userProposalsCards = userProposals.map((proposal) => {
    return (
      <Grid item={proposal}>
        <ProposalCardProfile
          key={proposal._id}
          _id={proposal._id}
          author={proposal.author}
          title={proposal.title}
          shortDescription={proposal.shortDescription}
          image={proposal.image}
          seeking={proposal.seeking}
        />
      </Grid>
    );
  });

  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <Container max-Width="sm">
          <Typography
            variant="h2"
            align="center"
            color="secondary"
            gutterBottom
          >
            {/* {!userProposalsCard ? `${otherUser.handle} has no active proposals at the moment` : `Profile Page: ${otherUser.userhandle}`} */}
            Profile Page: {otherUser.userhandle}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            View this user's active proposals for a possible collaboration 👀
          </Typography>
        </Container>
      </div>
      <Box sx={{ flexGrow: 1 }} >
        <Grid container spacing={2} columns={16} justifyContent="center">
          <Grid item xs={3}>
            {/* OTHER USER PROFILE SECTION------------------------------------------ */}
            <Item>
              <Card>
                <CardContent>
                  <h1> {otherUser.userhandle} </h1>
                  <br />
                  <div className="avatar">
                  <Avatar style={{ justifyContent: "center", display: "flex", alignItems:"center" }}

                    alt="Username"
                    src={otherUser.avatar}
                    sx={{ width: 100, height: 100 }}
                    classes={classes.chip}
                  />
                  </div>
                  <br />
                  <p>
                    <div className="socialIcons">
                      {otherUser.socialMedia &&
                        otherUser.socialMedia.Portfolio && (
                          <Link
                            href={otherUser.socialMedia.Portfolio}
                            target="blank"
                          >
                            <ScreenshotMonitorIcon className="svg_icons" />
                          </Link>
                        )}
                      {otherUser.socialMedia && otherUser.socialMedia.GitHub && (
                        <Link
                          href={otherUser.socialMedia.GitHub}
                          target="blank"
                        >
                          <GitHubIcon className="svg_icons" />
                        </Link>
                      )}
                      {otherUser.socialMedia && otherUser.socialMedia.LinkedIn && (
                        <Link
                          href={otherUser.socialMedia.LinkedIn}
                          target="blank"
                        >
                          <LinkedInIcon className="svg_icons" />
                        </Link>
                      )}
                      {otherUser.socialMedia && otherUser.socialMedia.Twitter && (
                        <Link
                          href={otherUser.socialMedia.Twitter}
                          target="blank"
                        >
                          <TwitterIcon className="svg_icons" />
                        </Link>
                      )}
                      {otherUser.socialMedia &&
                        otherUser.socialMedia.Instagram && (
                          <Link
                            href={otherUser.socialMedia.Instagram}
                            target="blank"
                          >
                            <InstagramIcon className="svg_icons" />
                          </Link>
                        )}
                    </div>
                    <br />
                    <h3>Role:</h3>
                    <Divider />
                    {otherUser.role}
                    <br />
                    <h3>Skills: </h3>
                    <Divider />
                    {otherUser.skills && otherUser.skills.join(" | ")}
                    <br />
                    <h3>Bio:</h3>
                    <Divider />
                    {otherUser.bio}
                    <br />

                    {chatId ?
                      //If the user logged in already has a connection with the otherUser
                      <Button
                        onClick={goToChat}
                        style={{
                          margin: 2,
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
                        style={{
                          margin: 2,
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
                  </p>

                </CardContent>
              </Card>
              {/* USER'S ACTIVE PROPOSALS----------------------------------------------------------- */}
            </Item>
          </Grid>
          <Grid item xs={7}>
            <Item>
              <Card>
                <CardContent>
                  <h1 text-align="center">
                    {otherUser.userhandle}'s Active Proposals
                  </h1>
                  <Grid container alignItems="stretch">
                    {userProposalsCards}
                    {userProposals.length == 0 ? (
                      <h4 style={styleObj}>
                        {otherUser.userhandle} hasn't published any proposals
                        yet{" "}
                      </h4>
                    ) : (
                      <></>
                    )
                    }
                  </Grid>
                </CardContent>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
