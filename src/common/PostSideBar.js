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
    fontSize: 25,
    fontWeight: 500,
  },
  usersEmail: {
    color: "white",
    fontSize: 14,
    fontWeight: 300,
  },
  sideBar: {
    color: "#E13D7E",
    fontSize: 18,
    fontWeight: 500,
    marginTop: 0,
    marginBottom: 20,
  },
  sideBarInactive: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: 500,
    marginTop: 0,
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
  lines: {
    marginTop: 70,
  },
}));

function LivePost() {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: "#1B1B17",
        height: "900px",
        borderRightColor: "#FFFFFF",
        border: "1px solid  #353535",
        borderTopRightRadius: "20px 20px",
        borderBottomRightRadius: "20px 20px",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <img className={classes.logo} src={logo} alt="image-logo" />
      </Link>
      <div className={classes.lines}>
        <h4 className={classes.sideBarInactive}>Dashboard</h4>
        <span className={classes.divider} />
        <h4 className={classes.sideBarInactive}>Live Post</h4>
        <span className={classes.divider} />
        <h6 className={classes.sideBar}>Pending Post</h6>
        <span className={classes.divider} />
        <h5 className={classes.sideBarInactive}>Saved</h5>
        <span className={classes.divider} />
      </div>
    </div>
  );
}

export default LivePost;
