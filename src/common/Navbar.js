import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import logo from "../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { loadUser, logout } from "../../src/actions/auth";
import { connect, useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  profileImage: {
    height: 40,
    width: 40,
    marginTop: 20,
    borderRadius: "50%",
    marginRight: 22,
    marginLeft: 20,
  },
  logo: {
    height: 35,
    cursor: "pointer",
    
  },
  topBar: {
    display: "flex",
    flexDirection: "row",
  },
  navWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  topHome: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: 600,
  },
  navText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: 600,
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
  },
}));

function Navbar() {
  const classes = useStyles();
  const token = useSelector((state) => state?.auth?.token);

  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      dispatch(loadUser(token));
    }
  }, [token]);

  return (
    <div className="row p-4">
      <div className="d-flex justify-content-end">
        <div className={classes.navWrapper}>
          <div className={classes.topBar}>
            <div className="d-flex row justify-content-center">
              <Link to="/trending/article" style={{ textDecoration: "none" }}>
                <div className={classes.topHome}>Home</div>
                <span className={classes.divider} />
              </Link>
            </div>
            <div className="d-flex row justify-content-center">
              <div className={classes.navText}>
                {!isAuthenticated ? (
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <button
                      type="submit"
                      onClick={login}
                      style={{
                        border: "none",
                        color: "white",
                        backgroundColor: "transparent",
                      }}
                    >
                      LogIn
                    </button>
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={handleLogout}
                      style={{
                        border: "none",
                        color: "white",
                        backgroundColor: "transparent",
                      }}
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
              <span className={classes.divder} />
            </div>
          </div>
          <Link to="/writepost" style={{ textDecoration: "none" }}>
            <div className="d-flex row justify-content-center">
              <button className={classes.buttonEarn}>Write and Earn</button>
              <span className={classes.divder} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);