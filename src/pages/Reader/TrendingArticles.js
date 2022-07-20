import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import logo from "../../assets/Logo.png";
import Twitter from "../../assets/twitter.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import TrendingArticlesTopBar from "../../common/TrendingArticlesTopBar";
import ArticleCard from "../../pages/Admin/Dashboard/ArticleCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../../actions/newsActions";

const useStyles = makeStyles((theme) => ({
  profileImage: {
    height: 40,
    width: 40,
    marginTop: 20,
    borderRadius: "50%",
    marginRight: 22,
    marginLeft: 20,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 40,
    display: "flex",
    justifyContent: "flex-start",
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
  },
  footerImage: {
    height: 20,
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 40,
    display: "flex",
    justifyContent: "flex-start",
  },
  headingRight: {
    fontSize: 20,
    fontWeight: 600,
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  subHeadingRight: {
    fontSize: 14,
    fontWeight: 400,
    color: "#DCDCDC",
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 5,
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
    flexWrap: "wrap",
  },
}));

function TrendingArticles() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {news} = useSelector(store=> store.news);

  useEffect(async() => {
await dispatch(getAllNews())
  }, [])
  
  return (
    <>
      <TrendingArticlesTopBar />
     { console.log(news)}
      <h2 className={classes.heading}>Trending Article</h2>
      <hr className={classes.hrLine} />
      <div className={classes.cardsArticle}>
        <div className='row'>
          {news.map((singleNews)=>{
            return  <ArticleCard news={singleNews}/>
          })}
        </div>
     
    
      </div>
      <div className="row">
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
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
