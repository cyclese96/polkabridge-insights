import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  profileImage: {
    height: 40,
    width: 40,
    marginTop: 20,
    borderRadius: "50%",
    marginRight: 22,
    marginLeft: 20,
  },
  topBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 40,
  },
  topHome: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 15,
    marginRight: 10,
    marginTop: 12,
  },
  buttonEarn: {
    background: "linear-gradient(110.85deg, #F98DC8 -25.63%, #E0077D 157.96%)",
    color: "#212121",
    fontSize: 16,
    fontWeight: 600,
    border: "none",
    borderRadius: 3,
    width: 170,
    marginTop: 13,
  },
  divider: {
    width: 30,
    height: 2,
    borderRadius: "10px",
    background: "linear-gradient(110.85deg, #F98DC8 -25.63%, #E0077D 157.96%)",
    position: "relative",
    top: 25,
    right: 55,
  },
}));

function TopBar() {
  const classes = useStyles();
  return (
    <div className={classes.topBar}>
      <Link to="/Trending/Article" style={{ textDecoration: "none" }}>
        <div className={classes.topHome}>Home</div>
      </Link>
      <span className={classes.divider} />
      <div className={classes.topHome}>Connect</div>
      <img
        className={classes.profileImage}
        src={
          "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2Zlc3Npb25hbCUyMGltYWdlJTIwb2YlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }
        alt="image-logo"
      />
      <Link to="/Writepost" style={{ textDecoration: "none" }}>
        <button className={classes.buttonEarn}>Write and Earn</button>
      </Link>
    </div>
  );
}

export default TopBar;
