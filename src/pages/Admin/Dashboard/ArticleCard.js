import React from "react";
import { makeStyles } from "@mui/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const useStyles = makeStyles((theme) => ({
  cardBody: {},
  card: {
    width: "100%",
    minHeight: 350,
    border: "1px solid #353535",
    borderRadius: 10,
    background: "#1B1B17",
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

function ArticleCard() {
  const classes = useStyles();
  return (
    <div className="row p-3">
      <div className="col-md-4 mt-2">
        <div className={classes.card}>
          <img
            className="card-img-top p-3"
            src="https://images.unsplash.com/photo-1617087720726-7539ab16d629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt="Card image cap"
            style={{ borderRadius: "25px" }}
          />
          <div className={classes.cardBody}>
            <h6 className={classes.time}>
              Fantasy<span className={classes.dot}>.</span>
              <span>1 Month Ago</span>{" "}
            </h6>
            <h5 className={classes.title}>
              Decentralized Cryptocurrency Exchange{" "}
            </h5>
            <p className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
              ullamcorper suspendisse at mi nulla volutpat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Leo ullamcorper suspendisse at
              mi nulla volutpat.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Leo ullamcorper suspendisse at mi nulla volutpat.
            </p>
            <div className="row">
              <div className="col-md-2 mb-4 mt-0">
                <img
                  className={classes.profileImage}
                  src={
                    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2Zlc3Npb25hbCUyMGltYWdlJTIwb2YlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  }
                  alt="image-logo"
                />
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-12 mr-1">
                    <div className="d-flex justify-content-between">
                      <div className={classes.details}>Dasteen</div>
                      <div className={classes.details}>Read Full</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-2 mr-1">
                    <div className="d-flex justify-content-between">
                      <div className={classes.info}>3 Min Read</div>
                      <div className={classes.info}>See More Info</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-2">
        <div className={classes.card}>
          <img
            className="card-img-top p-3"
            src="https://images.unsplash.com/photo-1629339938591-ec5e73815e47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt="Card image cap"
            style={{ borderRadius: "25px" }}
          />
          <div className={classes.cardBody}>
            <h6 className={classes.time}>
              Fantasy<span className={classes.dot}>.</span>
              <span>1 Month Ago</span>{" "}
            </h6>
            <h5 className={classes.title}>
              Decentralized Cryptocurrency Exchange{" "}
            </h5>
            <p className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
              ullamcorper suspendisse at mi nulla volutpat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Leo ullamcorper suspendisse at
              mi nulla volutpat.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Leo ullamcorper suspendisse at mi nulla volutpat.
            </p>
            <div className="row">
              <div className="col-md-2 mb-4 mt-0">
                <img
                  className={classes.profileImage}
                  src={
                    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2Zlc3Npb25hbCUyMGltYWdlJTIwb2YlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  }
                  alt="image-logo"
                />
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-12 mr-1">
                    <div className="d-flex justify-content-between">
                      <div className={classes.details}>Dasteen</div>
                      <div className={classes.details}>Read Full</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-2 mr-1">
                    <div className="d-flex justify-content-between">
                      <div className={classes.info}>3 Min Read</div>
                      <div className={classes.info}>See More Info</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 mt-2">
        <div className={classes.card}>
          <img
            className="card-img-top p-3"
            src="https://images.unsplash.com/photo-1597781914467-a5b93258e748?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Card image cap"
            style={{ borderRadius: "25px" }}
          />
          <div className={classes.cardBody}>
            <h6 className={classes.time}>
              Fantasy<span className={classes.dot}>.</span>
              <span>1 Month Ago</span>{" "}
            </h6>
            <h5 className={classes.title}>
              Decentralized Cryptocurrency Exchange{" "}
            </h5>
            <p className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo
              ullamcorper suspendisse at mi nulla volutpat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Leo ullamcorper suspendisse at
              mi nulla volutpat.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Leo ullamcorper suspendisse at mi nulla volutpat.
            </p>
            <div className="row">
              <div className="col-md-2 mb-4 mt-0">
                <img
                  className={classes.profileImage}
                  src={
                    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHByb2Zlc3Npb25hbCUyMGltYWdlJTIwb2YlMjBtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  }
                  alt="image-logo"
                />
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-12 mr-1">
                    <div className="d-flex justify-content-between">
                      <div className={classes.details}>Dasteen</div>
                      <div className={classes.details}>Read Full</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-2 mr-1">
                    <div className="d-flex justify-content-between">
                      <div className={classes.info}>3 Min Read</div>
                      <div className={classes.info}>See More Info</div>
                    </div>
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
