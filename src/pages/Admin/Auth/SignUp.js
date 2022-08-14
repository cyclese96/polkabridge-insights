import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/styles";
import { makeStyles } from "@material-ui/core";
import Navbar from "../../../common/Navbar";
import polkabridge from "../../../assets/PolkaBridge.png";
import Person from "../../../assets/person.png";
import Key from "../../../assets/key.png";
import Mail from "../../../assets/mail.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { setAlert } from "../../../actions/alert";
import { connect, useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { loadUser, signUp } from "../../../../src/actions/auth";

const useStyles = makeStyles((theme) => ({
  image: {
    width: 915,
    height: 837,
  },
  login: {
    color: " white ",
    textDecoration: "none",
  },
  signUp: {
    color: " #E13D7E",
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
    outline: "none",
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

const SignUp = ({ setAlert, signUp }) => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const token = useSelector((state) => state?.auth?.token);
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert("Passwords do not match", "danger");
    } else {
      signUp({ name, email, password });
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     return;
  //   }

  //   navigate("/trending/article");
  // }, [isAuthenticated]);

  useEffect(() => {
    if (!token) {
      return;
    } else {
      navigate("/login");
    }
  }, [token]);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex justify-content-center mx-4 my-4">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h5 className={classes.login}>Log in</h5>
            </Link>
            <div className={classes.line}></div>
            <h5 className={classes.signUp} style={{ marginLeft: 20 }}>
              Sign up
            </h5>
          </div>
          <form className="form" onSubmit={onSubmit}>
            <div className={classes.inputWrapper}>
              <div className={classes.para}>
                <img src={Person} className={classes.userIcon} alt="" />
                <input
                  className={classes.inputField}
                  type="text"
                  placeholder="UserName"
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>
              <div className={classes.para} style={{ marginTop: 10 }}>
                <img src={Key} className={classes.keyIcon} alt="" />
                <input
                  className={classes.inputField}
                  type="text"
                  placeholder="Display Name"
                />
              </div>
              <div className={classes.para} style={{ marginTop: 10 }}>
                <img src={Mail} className={classes.keyIcon} alt="" />
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
                />
              </div>
              <div className={classes.para} style={{ marginTop: 10 }}>
                <img src={Key} className={classes.keyIcon} alt="" />
                <input
                  className={classes.inputField}
                  type="text"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="mt-5">
              <button
                className={classes.buttonLogin}
                type="submit"
                value="SignUp"
              >
                Sign Up{" "}
              </button>
              {/* <input type="submit" className="btn btn-primary" value="SignUp" /> */}
            </div>
          </form>
        </div>
        <div className="col-md-6 mt-3">
          <img className={classes.image} src={polkabridge} alt="image-logo" />
        </div>
      </div>
    </>
  );
};
SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, signUp })(SignUp);
