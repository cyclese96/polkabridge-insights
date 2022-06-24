import { ClassNames } from "@emotion/react";
import React from "react";
import PostSideBar from "../../../common/PostSideBar";
import TopBar from "../../../common/TopBar";
import { makeStyles } from "@mui/styles";
import hotspot from "../../../assets/Live.png";
import pending from "../../../assets/Pending.png";
import user from "../../../assets/User.png";
import { CChart } from "@coreui/react-chartjs";
import { AreaChart, Area } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#E13D7E",
    fontSize: 24,
    fontWeight: 600,
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  cards: {
    height: 150,
    width: 320,
    backgroundColor: "#1B1B17",
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 35,
    marginBottom: 40,
    marginTop: 20,
  },
  icon: {
    height: 55,
    marginRight: 20,
  },
  number: {
    color: "#F98DC8",
    fontSize: 25,
    fontWeight: 600,
    marginRight: 5,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: 600,
    marginRight: 5,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
}));

function SuperAdminDashboard() {
  const classes = useStyles();
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <PostSideBar />
        </div>
        <div className="col-md-10">
          <TopBar />
          <h4 className={classes.title}>Dashboard</h4>
          <div className="row">
            <div className="col-md-4">
              <div className={classes.cards}>
                <img className={classes.icon} src={hotspot} alt="image-logo" />
                <div className={classes.wrapper}>
                  <h5 className={classes.number}>150</h5>
                  <h6 className={classes.text}>Live Posts</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={classes.cards}>
                <img className={classes.icon} src={pending} alt="image-logo" />
                <div className={classes.wrapper}>
                  <h5 className={classes.number}>150</h5>
                  <h6 className={classes.text}>Pending Posts</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              {" "}
              <div className={classes.cards}>
                <img className={classes.icon} src={user} alt="image-logo" />
                <div className={classes.wrapper}>
                  <h5 className={classes.number}>150</h5>
                  <h6 className={classes.text}>User Registered</h6>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div
                className="card"
                style={{
                  backgroundColor: "#1B1B17",
                  height: 500,
                  width: 500,
                  borderRadius: 10,
                }}
              >
                <h6
                  style={{
                    color: "white",
                    fontSize: 24,
                    float: "left",
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  Analytics
                </h6>
                <CChart
                  style={{ height: 400, width: 400, marginTop: 10 }}
                  type="doughnut"
                  data={{
                    labels: ["User", "Read", "Likes"],
                    datasets: [
                      {
                        backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
                        color: ["white"],
                        data: [40, 30, 40],
                      },
                    ],
                  }}
                />
              </div>
              <div
                className="card"
                style={{
                  backgroundColor: "#1B1B17",
                  borderRadius: 10,
                }}
              >
                <h6
                  style={{
                    color: "white",
                    fontSize: 24,
                    float: "left",
                    marginLeft: 20,
                    marginTop: 10,
                  }}
                >
                  Reports
                </h6>
                <AreaChart
                  width={600}
                  height={300}
                  data={data}
                  margin={{
                    top: 0,
                    right: 20,
                    left: 20,
                    bottom: 0,
                  }}
                >
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fill="#E13D7E"
                  />
                </AreaChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuperAdminDashboard;
