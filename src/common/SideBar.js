import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/styles";
import { makeStyles } from "@material-ui/core";
import logo from "../../src/assets/Logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../actions/profileAction";
import profile from "../reducers/profile";
import { Close } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import {
  ListItem,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  SwipeableDrawer,
  List,
  Divider,
  ListItemText,
  Backdrop,
  Button,
  Dialog,
  Snackbar,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  topbar: {
    backgroundColor: "#1B1B17",
    height: "100%",
    borderTopRightRadius: "20px 20px",
    borderBottomRightRadius: "20px 20px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  logo: {
    height: 35,
    marginBottom: 40,
    marginTop: 20,
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      marginLeft: "5px",
    },
  },
  profileImage: {
    height: 80,
    width: 80,
    marginTop: 20,
    borderRadius: "50%",
  },
  usersName: {
    color: "#E13D7E",
    fontSize: 20,
    fontWeight: 500,
    marginTop: 15,
  },
  usersEmail: {
    color: "white",
    fontSize: 12,
    fontWeight: 300,
  },
  sideBar: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: 500,
    marginTop: 25,
    marginBottom: 20,
  },
  sideBarActive: {
    color: "#E13D7E",
    fontSize: 18,
    fontWeight: 500,
    marginTop: 25,
    marginBottom: 20,
  },
  line: {
    borderRight: "1px solid grey",
    height: "fit-content",
  },
  divider: {
    width: 30,
    height: 2,
    borderRadius: "10px",
    background: "linear-gradient(110.85deg, #F98DC8 -25.63%, #E0077D 157.96%)",
    display: "grid",
    margin: "auto",
    position: "relative",
    top: "-15px",
    left: "0px",
  },
  menuIcon: {
    color: "#212121",
  },
  sectionMobile: {
    display: "none",
    backgroundColor: "transparent",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  linkWrapper: {
    backgroundColor: "#1B1B17",
    textDecoration: "none",
  },
  mobileLink: {
    textDecoration: "none",
    color: "white",
  },
  menuTitle: {
    textDecoration: "none",
    color: "white",
  },
}));

function SideBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };
  const [state, setState] = React.useState({
    right: false,
  });
  const profile = useSelector((state) => state?.profile?.profile);

  useEffect(() => {
    console.log("fetching profile accccccccc ");
    dispatch(getProfile());
  }, []);

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="d-flex justify-content-between">
        <div className={classes.linkWrapper}>
          <List>
            {[
              { name: "Home", link: "/" },
              { name: "Profile", link: "/profile" },
              { name: "Dashboard", link: "/" },
              { name: "Create Post", link: "/writepost" },
            ].map((tab, index) => (
              <Link to={tab.link} key={index}>
                <ListItem
                  button
                  onClick={toggleDrawer(anchor, false)}
                  key={index}
                >
                  <ListItemText
                    primary={tab.name}
                    className={classes.menuTitle}
                  />
                </ListItem>
              </Link>
            ))}
            {[
              {
                name: "Trending Article",
                id: "http://localhost:3001/trending/article",
              },
            ].map((tab, index) => (
              <a href={tab.id} className={classes.mobileLink} key={index}>
                <ListItem button key={tab.name}>
                  <ListItemText
                    primary={tab.name}
                    className={classes.menuTitle}
                  />
                </ListItem>
              </a>
            ))}
          </List>
          <Divider />
        </div>
        <div style={{ color: "white", paddingTop: 10, paddingRight: 10 }}>
          <Close onClick={toggleDrawer(anchor, false)} />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className={classes.topbar}>
        <div className={classes.lines}>
          <Link to="/trending/article" style={{ textDecoration: "none" }}>
            <img className={classes.logo} src={logo} alt="image-logo" />
          </Link>
          <br />
          <img
            className={classes.profileImage}
            src={profile?.avatar}
            alt="image-logo"
          />
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <h4 className={classes.usersName}>{profile?.name}</h4>
          </Link>
          <h6 className={classes.usersEmail}>{profile?.email}</h6>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h5 className={classes.sideBarActive}>My Post</h5>
          </Link>
          <span className={classes.divider} />
          <h5 className={classes.sideBar}>Earning</h5>
          <span className={classes.divider} />
          <h5 className={classes.sideBar}>My Views</h5>
          <span className={classes.divider} />
          <h5 className={classes.sideBar}>Saved</h5>
          <span className={classes.divider} />
        </div>
      </div>
      <div className={classes.sectionMobile}>
        <div>
          <Link to="/trending/article" style={{ textDecoration: "none" }}>
            <img className={classes.logo} src={logo} alt="image-logo" />
          </Link>
        </div>
        <div>
          {["top"].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton
                aria-label="Menu"
                aria-haspopup="true"
                className={classes.menuIcon}
                onClick={toggleDrawer(anchor, true)}
              >
                <MenuIcon style={{ color: "white" }} />
              </IconButton>

              <SwipeableDrawer
                anchor={anchor}
                disableSwipeToOpen={false}
                open={state[anchor] !== undefined ? state[anchor] : false}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default SideBar;
