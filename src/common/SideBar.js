import React from "react";
import { makeStyles } from "@mui/styles";
import logo from "../../src/assets/Logo.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 35,
    marginBottom: 40,
    marginTop: 20,
    cursor: "pointer",
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
}));

function SideBar() {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: "#1B1B17",
        height: "100%",
        borderTopRightRadius: "20px 20px",
        borderBottomRightRadius: "20px 20px",
      }}
    >
      <div className={classes.lines}>
        <Link to="/Livepost" style={{ textDecoration: "none" }}>
          <img className={classes.logo} src={logo} alt="image-logo" />
        </Link>
        <br />
        <img
          className={classes.profileImage}
          src={
            "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2Zlc3Npb25hbCUyMGltYWdlJTIwb2YlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          alt="image-logo"
        />
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <h4 className={classes.usersName}>Dasteen</h4>
        </Link>
        <h6 className={classes.usersEmail}>dasteen@gmail.com</h6>
        <h5 className={classes.sideBarActive}>My Post</h5>
        <span className={classes.divider} />
        <h5 className={classes.sideBar}>Earning</h5>
        <span className={classes.divider} />
        <h5 className={classes.sideBar}>My Views</h5>
        <span className={classes.divider} />
        <h5 className={classes.sideBar}>Saved</h5>
        <span className={classes.divider} />
      </div>
    </div>
  );
}

export default SideBar;
