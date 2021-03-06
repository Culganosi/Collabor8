import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import CameraIcon from "@mui/icons-material/Camera";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { DataContext } from "./../DataContext";
import { useNavigate } from "react-router-dom";


const pages = ["People", "Proposals", "Create-proposal"];

const ResponsiveAppBar = () => {
  
  const navigate=useNavigate();
  const {self, setSelf} = useContext(DataContext);

  const logout = () => {
    axios
      .post(`api/auth/out`)
      .then((res) => {
        setSelf({});
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  //Get info about self
  useEffect(() => {
    if(Object.keys(self).length==0) {
      axios.get("/api/users/self", { withCredentials: true })
      .then(res => {
        setSelf(res.data)
      })
      .catch(() => {
        console.log("Not logged in")
        navigate("/")
      })
    }
  }, [self])



  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ background: "#e91e63" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CameraIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/Home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              paddingRight: '15px'
            }}
          >
            Collab||8
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link style={{textDecoration: "none", color: "#E75480"}} to={`/${page}`}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CameraIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                    <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Collab||8
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link style={{textDecoration: "none", color: "#FFFFFF"}} to={`/${page}`}>{page}</Link>
              </Button>
            ))}
          </Box>
          <IconButton
            size="large"
            color="inherit"
            style={{ paddingRight: '15px'}}
            textDecoration="none"
          >
        
              <a
              href="/Chat"
              to="/Chat"
              color="inherit"
              textDecoration="none"
              >
              <MailIcon style={{color: "#FFFFFF"}} />
           </a>
     
          </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Profile"
                  src={self.avatar}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => ( */}
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                <Link style={{textDecoration: "none", color: "#E75480"}} to={`/My-Profile`}>My Profile</Link>
                  </Typography>
                  </MenuItem>
                  <MenuItem>
                  <Typography textAlign="center" display="block">
                  <Link style={{textDecoration: "none", color: "#E75480"}} onClick ={() => logout()} to={`/Logout`}>Logout</Link>
                  </Typography>
                
                </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;


