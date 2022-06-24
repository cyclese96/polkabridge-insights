import React from "react";
import { makeStyles } from "@mui/styles";
import logo from "../../../assets/Logo.png";
import ArticleCard from "./ArticleCard";
import LeftBar from "../../../common/TopBar";
import PostSideBar from "../../../common/PostSideBar";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 35,
    marginBottom: 40,
    marginTop: 20,
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
    marginTop: 25,
    marginBottom: 30,
  },
  line: {
    borderRight: "1px solid grey",
    height: 1400,
  },
  writeTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: 400,
    padding: 20,
  },
  dropdown: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
}));

function LivePost() {
  const classes = useStyles();
  return (
    <div className="row mt-4">
      <div className="col-md-2">
        <PostSideBar />
      </div>
      <div className="col-md-10">
        <LeftBar />
        <div className=" d-flex justify-content-between mt-4">
          <div>
            <h2
              style={{
                color: "#E13D7E",
                textAlign: "left",
                fontSize: 25,
                fontWeight: 500,
              }}
            >
              {" "}
              Live Posts
            </h2>
          </div>{" "}
          <div className={classes.dropdown}>
            <h6 className={classes.writeTitle}>Catagory:</h6>
            <select
              className="form-control"
              style={{
                width: "100%",
                height: "35px",
                border: "2px solid #353535",
                backgroundColor: "transparent",
                marginRight: 10,
                borderRadius: 15,
                color: "white",
              }}
            >
              <option value="beginner">select</option>
              <option value="beginner">Live Post</option>
              <option value="moderator">Pending Post</option>
              <option value="fluent">Saved</option>
            </select>
          </div>
        </div>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
}

export default LivePost;
