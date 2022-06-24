import React from "react";
import { makeStyles } from "@mui/styles";
import upload from "../../assets/upload.png";
import PostSideBar from "../../common/PostSideBar";
import TopBar from "../../common/TopBar";
const useStyles = makeStyles((theme) => ({
  logo: {
    width: 915,
    height: 837,
  },
  myPost: {
    color: "#e36497",
    fontSize: 25,
    fontWeight: 500,
  },
  writePost: {
    color: "#E13D7E",
    fontSize: 25,
    fontWeight: 500,
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
  inputField: {
    backgroundColor: "#1B1B1B !important",
    border: "2px solid #353535 !important",
    color: "white",
  },
  buttonPublish: {
    width: "10%",
    height: 40,
    background: "linear-gradient(110.85deg, #F98DC8 -25.63%, #E0077D 157.96%)",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    fontWeight: 600,
    marginLeft: 10,
    marginRight: 20,
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
  },
  uploadImage: {
    height: 100,
    width: 100,
    marginTop: 30,
  },
  dragText: {
    color: "white",
    fontSize: 14,
    fontWeight: 300,
    marginTop: 10,
    marginBottom: 30,
  },
  blogText: {
    color: "#DCDCDC",
    fontSize: 12,
    fontWeight: 300,
    width: "80%",
  },
}));

function PendingPost() {
  const classes = useStyles();
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <PostSideBar />
        </div>
        <div className="col-md-10">
          <TopBar />
          <div className="row">
            <div className="d-flex justify-content-start mx-4 my-4">
              <h5 className={classes.myPost}>Pending Post</h5>
              <div className={classes.line}></div>
              <h5 className={classes.writePost} style={{ marginLeft: 20 }}>
                Action
              </h5>
            </div>
            <div>
              <div
                className="card "
                style={{
                  width: "80%",
                  backgroundColor: "#1B1B17",
                  border: "1px solid #353535",
                  borderRadius: 20,
                }}
              >
                <div className="d-flex justify-content-between">
                  <h6 className={classes.writeTitle}>Title goes here</h6>
                  <div className={classes.dropdown}>
                    <h6 className={classes.writeTitle}>Catagory:</h6>
                    <select
                      className="form-control"
                      style={{
                        width: "100%",
                        height: "40px",
                        border: "2px solid #353535",
                        backgroundColor: "transparent",
                        marginRight: 10,
                        color: "white",
                      }}
                    >
                      <option value="beginner">select</option>
                      <option value="beginner">Tokens</option>
                      <option value="moderator">PBR</option>
                      <option value="fluent">PWAR</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div
                    className="card mb-3"
                    style={{
                      width: "80%",
                      backgroundColor: "#1B1B17",
                      border: "1px dotted #FFFFFF",
                      borderRadius: 20,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      className={classes.uploadImage}
                      src={upload}
                      alt="image-logo"
                    />
                    <h6 className={classes.dragText}>
                      Drag and drop an image,
                      <span style={{ color: "#E13D7E" }}> or Browse</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-start mt-4 ml-2">
              <h4 className={classes.blogText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dui, eget donec egestas aenean. Nisl, euismod quis vel
                tincidunt. At amet parturient ut et. Vestibulum integer est
                mauris eget velit eu dignissim nunc nulla. Vivamus egestas
                vitae, duis a non. Nulla maecenas interdum enim pellentesque vel
                ultricies ligula risus, tristique. Magna amet, et arcu odio a
                nunc, volutpat ultrices. Enim justo, risus sapien eleifend nec
                nulla nunc est ultrices. In sagittis ac libero diam in. Tellus
                commodo ac, donec diam cras. Et suspendisse mattis facilisi sit
                proin diam. Purus nisl pretium sit eleifend at velit lectus est.
                Faucibus egestas nullam amet orci. Aliquam sit eget morbi
                turpis.
              </h4>
            </div>
            <div className="d-flex justify-content-start mt-4">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <h5
                  className="d-flex justify-content-start mb-4"
                  style={{ fontSize: 16, fontWeight: 600, color: "white" }}
                >
                  Write a brief message to writer{" "}
                </h5>
                <input
                  className="p-2"
                  style={{
                    backgroundColor: "#1B1B1B",
                    border: "2px solid #353535",
                    borderRadius: 10,
                    width: "80%",
                    display: "flex",
                    justifyContent: "center",
                    color: "#DCDCDC",
                  }}
                  type="text"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui, eget donec egestas aenean. Nisl, euismod quis vel tincidunt. At amet parturient ut et."
                />
              </div>
            </div>
            <div className="d-flex justify-content-start mt-5">
              <button className={classes.buttonPublish}>Edit</button>
              <button className={classes.buttonPublish}>Approve</button>
              <button className={classes.buttonPublish}>Delete</button>
              <button className={classes.buttonPublish}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PendingPost;
