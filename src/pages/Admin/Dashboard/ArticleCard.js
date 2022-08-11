import React from "react";
import { makeStyles } from "@mui/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const useStyles = makeStyles((theme) => ({
  cardBody: {},
  card: {
    width: "100%",
    height: "350px",
    border: "1px solid #353535",
    borderRadius: 10,
    background: "#1B1B17",
    // [theme.breakpoints.up('md')]: {
    //   width: "90%",
    // },

  },
  time: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: 400,
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: 16,
  },
  dot: {
    marginRight: 8,
    marginLeft: 8,
  },

  title: {
    display: "flex",
    justifyContent: "flex-start",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 500,
    marginLeft: 16,
  },
  text: {
    display: "flex",
    justifyContent: "flex-start",
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: 300,
    textAlign: "left",
    textIndent: 2,
    marginLeft: 16,
    marginRight: 16,
  },
  profileImage: {
    height: 30,
    width: 30,
    marginTop: 12,
    marginLeft: 5,
    borderRadius: "50%",
  },
  details: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: 500,
    marginRight: 5,
  },
  info: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: 400,
    marginRight: 5,
  },
}));

function ArticleCard({ news }) {
  const classes = useStyles();
  return (
    <div className="col-md-4 mt-2">
      <div className={classes.card}>
        <img
          className="card-img-top p-3"
          src={news.image}
          alt="Card image cap"
          style={{ borderRadius: "25px" }}
        />
        <div className={classes.cardBody}>
          <h6 className={classes.time}>
            {news.category}
            <span className={classes.dot}>.</span>
            <span>1 Month Ago</span>{" "}
          </h6>
          <h5 className={classes.title}>{news.title}</h5>
          <div>
            <p className={classes.text} style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>{news.content}</p>
          </div >
          <div className="row">
            <div className="col-md-2 mb-4 mt-0">
              <img
                className={classes.profileImage}
                src={news.image}
                alt="image-logo"
              />
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-12 mr-1">
                  <div className="d-flex justify-content-between">
                    <div className={classes.details}>{news.user.name}</div>
                    <div className={classes.details}>Read Full</div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mt-2 mr-1">
                  <div className="d-flex justify-content-between">
                    <div className={classes.info}>{news.readTime}</div>
                    <div className={classes.info}>See More Info</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
