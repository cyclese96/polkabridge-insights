import React, { useEffect } from "react";
import { useTheme } from "@mui/styles";
import { makeStyles } from "@material-ui/core";
import logo from "../../assets/Logo.png";
import Twitter from "../../assets/twitter.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";

import ArticleCard from "../../pages/Admin/Dashboard/ArticleCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../../actions/newsActions";
import Navbar from "../../common/Navbar";
import SideBar from "../../common/SideBar";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 35,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 40,
    display: "flex",
    justifyContent: "flex-start",
    [theme.breakpoints.down("md")]: {
      height: 27,
      marginLeft: 15,
    },
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
  heading: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: 500,
    marginLeft: 30,
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: 50,
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "flex-start",
      marginLeft: 10,
      fontSize: 20,
    },
  },
  footer: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 500,
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: 10,
    marginLeft: 40,
    color: "#DCDCDC",
    [theme.breakpoints.down("md")]: {
      fontSize: 13,
      marginLeft: 15,
    },
  },
  footerImage: {
    height: 20,
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 40,
    display: "flex",
    justifyContent: "flex-start",
    [theme.breakpoints.down("md")]: {
      height: 15,
      marginLeft: 15,
    },
  },
  headingRight: {
    fontSize: 20,
    fontWeight: 600,
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 20,
    [theme.breakpoints.down("md")]: {
      fontSize: 13,
      display: "flex",
      justifyContent: "center",
    },
  },
  subHeadingRight: {
    fontSize: 14,
    fontWeight: 400,
    color: "#DCDCDC",
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 5,
    [theme.breakpoints.down("md")]: {
      fontSize: 10,
      display: "flex",
      justifyContent: "center",
    },
  },
  copyRight: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 500,
    marginLeft: 40,
  },
  hrLine: {
    width: "93%",
    height: 2,
    color: "white",
    align: "center",
    margin: "auto",
  },
  cardsArticle: {
    width: "96%",
    display: "flex",
    marginLeft: 30,
    justifyContent: "center",
    alignContent: "center",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      width: "98%",
    },
  },
  footerWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
}));

function TrendingArticles() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { news } = useSelector((store) => store.news);

  useEffect(async () => {
    await dispatch(getAllNews("all", 1));
  }, []);

  return (
    <>
      <div className="row mt-4">
        <div className="col-md-2">
          <SideBar />
        </div>

        <div className="col-md-10">
          <Navbar />
          <h2 className={classes.heading}>Trending Article</h2>
          <hr className={classes.hrLine} />
          <div className={classes.cardsArticle}>
            <div className="row mt-4">
              {news.map((singleNews) => {
                return <ArticleCard news={singleNews} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="footer">
            <img className={classes.logo} src={logo} alt="image-logo" />
            <p className={classes.subHeading}>Connect with PolkaBridge</p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                className={classes.footerImage}
                src={Twitter}
                alt="footer-image"
              />{" "}
              <img
                className={classes.footerImage}
                src={Instagram}
                alt="footer-image"
              />
              <img
                className={classes.footerImage}
                src={Linkedin}
                alt="footer-image"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className={classes.footerWrapper}>
              <div className="col-md-3">
                <div className="footer">
                  <p className={classes.headingRight}>Category</p>
                  <p className={classes.subHeadingRight}>PolkaBridge Finance</p>
                  <p className={classes.subHeadingRight}>Crypto Knowledge</p>
                  <p className={classes.subHeadingRight}>More Category</p>
                  <p className={classes.subHeadingRight}>Crypto Basics</p>
                  <p className={classes.subHeadingRight}>Ecosystem</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer">
                  <p className={classes.headingRight}>About Me</p>
                  <p className={classes.subHeadingRight}> About Me</p>
                  <p className={classes.subHeadingRight}>Achievement</p>
                  <p className={classes.subHeadingRight}> Projects</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer">
                  <p className={classes.headingRight}>Get in touch</p>
                  <p className={classes.subHeadingRight}>+62-8XXX-XXX-XX</p>
                  <p className={classes.subHeadingRight}>demo@gmail.com</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer">
                  <p className={classes.headingRight}>Follow Us</p>
                  <p className={classes.subHeadingRight}>Instagram</p>
                  <p className={classes.subHeadingRight}>Facebook</p>
                  <p className={classes.subHeadingRight}>Twitter</p>
                  <p className={classes.subHeadingRight}>Medium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr
        style={{
          width: "95%",
          height: 2,
          color: "white",
          align: "center",
          margin: "auto",
        }}
      />
      <div className="d-flex justify-content-between my-3">
        <div className={classes.copyRight}>© 2022 PolkaBridge</div>
        <div className={classes.copyRight} style={{ marginRight: 50 }}>
          All Right Reserved.
        </div>
      </div>
    </>
  );
}

export default TrendingArticles;
