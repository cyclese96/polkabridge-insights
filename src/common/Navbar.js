import React from "react";
import { makeStyles } from "@mui/styles";
import logo from "../assets/Logo.png";
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
    marginRight: 15,
    marginTop: 12,
  },
  navText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: 600,
    marginLeft: 15,
    marginRight: 22,
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
  logo: {
    height: 35,
    marginBottom: 40,
    marginTop: 20,
    marginLeft: 50,
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

function Navbar() {
  const classes = useStyles();
  return (
    <div className="row">
      <div className="d-flex justify-content-between">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className={classes.logo} src={logo} alt="image-logo" />
        </Link>
        <div className={classes.topBar}>
          <div className={classes.topHome}>Home</div>
          <span className={classes.divider} />
          <div className={classes.navText}>Connect</div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className={classes.navText}>LogIn</div>
          </Link>
          <Link to="/writepost" style={{ textDecoration: "none" }}>
            <button className={classes.buttonEarn}>Write and Earn</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
