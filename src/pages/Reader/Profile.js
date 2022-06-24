import React from "react";
import SideBar from "../../common/SideBar";
import TopBar from "../../common/TopBar";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: "50%",
    marginRight: 22,
    marginLeft: 20,
    border: "2px solid #E0077D",
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
  buttonUpload: {
    background: "linear-gradient(110.85deg, #F98DC8 -25.63%, #E0077D 157.96%)",
    color: "#212121",
    fontSize: 16,
    fontWeight: 600,
    border: "none",
    borderRadius: 12,
    width: 170,
    height: 50,
    marginRight: 25,
  },
  buttonDelete: {
    background: "#282826",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 600,
    border: "none",
    borderRadius: 12,
    width: 170,
    height: 50,
    marginRight: 25,
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
  card: {
    backgroundColor: "white",
    width: "80%",
  },

  inputField: {
    borderRadius: 10,
    backgroundColor: "#1B1B1B !important",
    border: "2px solid #353535 !important",
    padding: "0px 0px 0px 10px",
    textDecoration: "none",
    color: "white",
    height: 50,
    width: "90%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    outline: "none",
    marginLeft: 20,
  },
  inputFieldName: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: 30,
    color: "#E0077D",
    fontSize: 18,
    fontWeight: 600,
    marginTop: 20,
  },
  saveProfileButton: {
    background: "linear-gradient(110.85deg, #F98DC8 -25.63%, #E0077D 157.96%)",
    color: "#212121",
    fontSize: 16,
    fontWeight: 600,
    border: "none",
    borderRadius: 12,
    width: 170,
    height: 50,
  },
}));

function Profile() {
  const classes = useStyles();
  return (
    <div>
      <div className="row">
        <div className="col-md-2 mt-4">
          <SideBar />
        </div>
        <div className="col-md-10 mt-4">
          <TopBar />
          <h2
            className="d-flex justify-content-start"
            style={{
              color: "#E0077D",
              fontSize: 30,
              fontWeight: 500,
              marginLeft: 30,
            }}
          >
            Profile
          </h2>
          <div
            className="card mt-4 mb-4"
            style={{
              width: "90%",
              backgroundColor: "#1B1B17",
              borderRadius: 10,
              border: "1px solid #353535",
              marginLeft: 20,
            }}
          >
            <div className="d-flex justify-content-start align-items-center mt-3">
              <img
                className={classes.profileImage}
                src={
                  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2Zlc3Npb25hbCUyMGltYWdlJTIwb2YlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                }
                alt="image-logo"
              />

              <button className={classes.buttonUpload}>
                Upload New Picture
              </button>
              <button className={classes.buttonDelete}>Delete</button>
            </div>
            <h5 className={classes.inputFieldName}>Name</h5>
            <input
              className={classes.inputField}
              type="text"
              placeholder="Name"
            />{" "}
            <h5 className={classes.inputFieldName}>Username</h5>
            <input
              className={classes.inputField}
              type="text"
              placeholder="User Name"
            />{" "}
            <h5 className={classes.inputFieldName}>Email</h5>
            <input
              className={classes.inputField}
              type="text"
              placeholder="Email"
            />{" "}
            <h5 className={classes.inputFieldName}>Location</h5>
            <input
              className={classes.inputField}
              type="text"
              placeholder="Location"
            />{" "}
            <h5 className={classes.inputFieldName}>Bio</h5>
            <textarea
              rows="8"
              cols="50"
              className={classes.inputField}
              type="textarea"
              placeholder="Bio"
              style={{ paddingLeft: 10, paddingTop: 10 }}
            />{" "}
            <div className="d-flex justify-content-center align-items-center mt-3 mb-4 ">
              <button className={classes.saveProfileButton}>
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
