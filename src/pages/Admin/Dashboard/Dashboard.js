import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import ArticleCard from "./ArticleCard";
import SideBar from "../../../common/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { getUserPost } from "../../../actions/newsActions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../common/Navbar";
import { checkUserAuthenticated, loadUser } from "../../../actions/auth";

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
  // divider: {
  //   width: 20,
  //   height: 3,
  //   borderRadius: 5,
  //   marginTop: 5,
  //   marginBottom: 10,
  //   background:
  //     "linear-gradient(110.85deg, #EBBE35 -24%, #FBF4AA 34.74%, #F1E699 52.1%, #D8C16C 86.61%, #B08524 134.62%, #AC801E 138.61%, #FBF4AA 213.19%)",
  // },
  line: {
    borderRight: "1px solid grey",
    height: 1400,
  },
}));

function Dashboard({ isAuthenticated }) {
  const dispatch = useDispatch();
  const { news } = useSelector((store) => store.news);

  const token = useSelector((state) => state?.auth?.token);
  const navigate = useNavigate();

  useEffect(async () => {
    await dispatch(getUserPost());
  }, []);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      dispatch(loadUser(token));
    }
  }, [token]);

  return (
    <div className="row mt-4">
      <div className="col-md-2">
        <SideBar />
      </div>
      <div className="col-md-10">
        <Navbar />
        <h2 style={{ color: "#E13D7E", textAlign: "left" }}> My Post</h2>
        <div className="row">
          {news.map((singleNews) => {
            return <ArticleCard news={singleNews} />;
          })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { checkUserAuthenticated })(Dashboard);
