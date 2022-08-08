import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Navbar from "../../../common/Navbar";
import Person from "../../../assets/person.png";
import Key from "../../../assets/key.png";
import { Link, Navigate } from "react-router-dom";
import { loginUser } from "../../../actions/auth";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: "fit-content",
    height: "837px",
  },
  login: {
    color: " #E13D7E",
    textDecoration: "none",

  },
  signUp: {
    color: " white",
    cursour: 'pointer',
  },
  divider: {
    color: " #E13D7E",
    fontSize: 24,
    marginLeft: 20,
  },
  line: {
    borderRight: "1px solid #E13D7E",
    height: 23,
    fontSize: 25,
    marginLeft: 20,
    width: 0,
  },
  title: {
    fontSize: 50,
    fontWeight: 600,
    color: "white",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 500,
    color: "white",
  },

  buttonLogin: {
    width: "50%",
    height: 40,
    background: "linear-gradient(110.85deg, #F98DC8 -25.63%, #E0077D 157.96%)",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    fontWeight: 600,
  },

  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
  },
  para: {
    borderRadius: 10,
    backgroundColor: "#1B1B1B !important",
    border: "2px solid #353535 !important",
    color: "white",
    height: 60,
    width: "60%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  inputField: {
    backgroundColor: "transparent",
    fontSize: "18px",
    color: "#FFFFFF",
    textDecoration: "none",
    padding: "0px 0px 0px 10px",
    border: "0px solid",
    marginBottom: 10,
    textDecoration: "none",
    height: 60,
    width: "100%",
    border: "0px solid #2a2a2a",
    borderRadius: 10,
    marginTop: 10,
    outlineStyle: "none",
  },
  userIcon: {
    width: 30,
    height: 30,
    margin: "10px 12px 10px 10px",
  },
  keyIcon: {
    width: 22,
    height: 22,
    margin: "10px 12px 10px 10px",
  },
}));

const Login = ({ loginUser, logout, isAuthenticated }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex justify-content-center mx-4 my-4">
            <h5 className={classes.login}>Log in</h5>
            <div className={classes.line}></div>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <h5 className={classes.signUp} style={{ marginLeft: 20 }}>
                Sign up
              </h5>
            </Link>
          </div>
          <h1 className={classes.title}>Welcome back!</h1>
          <p className={classes.subTitle}>
            Sign in to get the most out of Insights.
          </p>
          <form className="form" onSubmit={onSubmit}>
            <div className={classes.inputWrapper}>
              <div className={classes.para}>
                <img src={Person} className={classes.userIcon} alt="" />
                <input
                  className={classes.inputField}
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className={classes.para} style={{ marginTop: 10 }}>
                <img src={Key} className={classes.keyIcon} alt="" />
                <input
                  className={classes.inputField}
                  type="text"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  minLength="6"
                />
              </div>
            </div>
            <div className="d-flex justify-content-evenly mt-3">
              <div style={{ marginLeft: 40 }}>
                <label class="container" style={{ color: "white" }}>
                  <input
                    type="checkbox"
                    checked=""
                    style={{ marginRight: 10 }}
                  />
                  Remember Me
                </label>
              </div>
              <div style={{ color: "white", marginRight: 60 }}>
                Forgot Password?
              </div>
            </div>
            <div className="mt-4">
              <button
                className={classes.buttonLogin}
                type="submit"
                value="Login"
              >
                Log in
              </button>
              
            </div>
          </form>
        </div>
        {/* <div className="col-md-6 mt-3">
          <img className={classes.logo} src={polkabridge} alt="image-logo" />
        </div> */}
      </div>
    </>
  );
};


const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginUser })(Login);
