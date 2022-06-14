import React from "react"
import "./styles.css";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

export default function Splash() {
  const styles = muiBaseTheme => ({
    card: {
      maxWidth: 250,
      margin: "auto",
      transition: "0.3s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
      }
    },
    media: {
      paddingTop: "56.25%"
    },
    content: {
      textAlign: "left",
      padding: muiBaseTheme.spacing.unit * 3
    },
    divider: {
      margin: `${muiBaseTheme.spacing.unit * 3}px 0`
    },
    heading: {
      fontWeight: "bold"
    },
    subheading: {
      lineHeight: 1.8
    },
    avatar: {
      display: "inline-block",
      border: "2px solid white",
      "&:not(:first-of-type)": {
        marginLeft: -muiBaseTheme.spacing.unit
      }
    }
return (
      <div className="App">
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={
              "https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg"           
            }
          />
          <CardContent className={classes.content}>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h6"}
              gutterBottom
            >
            Here are your latest proposals
            </Typography>
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              Look this is my project proposal bla bla bla
              I need people with these skills : front-end
            </Typography>
            <Divider className={classes.divider} light />
            {faces.map(face => (
              <Avatar className={classes.avatar} key={face} src={face} />
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="App">
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={
              "https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg"           
            }
          />
          <CardContent className={classes.content}>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h6"}
              gutterBottom
            >
            These users can help you with your proposals
                </Typography>
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              These users have the skills that you are looking for
            </Typography>
            <Divider className={classes.divider} light />
            {faces.map(face => (
              <Avatar className={classes.avatar} key={face} src={face} />
            ))}
          </CardContent>
        </Card>
        </div>
    );
}