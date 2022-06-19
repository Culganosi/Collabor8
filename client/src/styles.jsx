import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  headercontainer :{
    padding: theme.spacing(8, 0, 6)
  },
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    // backgroundColor: "transparent",
    // opacity: 50,
    // backdropFilter:"blur(20px)",
  },
  icon: {
    marginRight: '20px',
  },
  buttons: {
    marginTop: '40px'
  },
  cardGrid: {
    padding: '20px',	

  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia:{
    paddingTop: '56.25%'
  },
  createPropMedia: {
    paddingTop: '36.25%'
  },
  createProfMedia: {
    paddingTop: '36.25%'
  },
  ownPropImg: {
    paddingTop: '30%'

  },
  cardMediaUser:{
    borderRadius: '100%',
    width: '50%',
    height: 320,
    marginLeft: '25%',
    marginBottom: 10
  },
  proposalImg:{
    borderRadius: '100%',
    width: '50%',
    height: 320,
    marginLeft: '25%',
    marginBottom: 10
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: '50px 0'
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  content: {
    flex: "1 0 auto",
    alignSelf: "flex-start",
  },
  cover: {
    width: 300,
    height: 320,
    borderRadius: '75%',
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  cardContainer: {
    paddingTop: "20px",
  },
  title: {
    paddingTop: "20px",
  },
  skills: {
    paddingTop: "20px",
  },
  bio: {
    paddingTop: "20px",
    paddingBottom: "20px"
  },
  userprofileavatar: {
    height: '50%',
    width: '260px',
    margin: '20px',
    marginBottom: '50px',
    borderRadius: '75%',
    flexGrow: 6
  },
  divider: {
  background: 'white',
  width: '100',
  },
  ownprofile: {
    width: 'auto',
    padding:'15%',
    height: 'auto',
  },

  createprofile: {
    width: 'auto',
    padding:'8%',
    height: 'auto',
  },
  
}));

export default useStyles;