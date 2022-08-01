import React, { useState } from "react";
import SideBar from "../../../common/SideBar";
import { makeStyles } from "@mui/styles";
import upload from "../../../assets/upload.png";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { ADD_POSTS } from "../../../actions/types";
import { addPost } from "../../../actions/newsActions";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../common/Navbar";

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
    width: "15%",
    height: 40,
    background: "linear-gradient(110.85deg, #F98DC8 -25.63%, #E0077D 157.96%)",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    fontWeight: 600,
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
  },
  inputTitle: {
    width: "60%",
    height: "50px",
    backgroundColor: "#1B1B17",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    color:"#FFFFFF"
  },
  textArea: {
    backgroundColor: "#1B1B1B",
    border: "2px solid #353535",
    borderRadius: 10,
    width: "90%",
    height: "100px",
    color: "#DCDCDC",
    paddingLeft: "5px",
    paddingTop: "5px",
  },
  inputTags: {
    backgroundColor: "#1B1B1B",
    border: "2px solid #353535",
    borderRadius: 10,
    width: "90%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    color: "#DCDCDC",
    paddingLeft: "5px",
  },
}));

function WritePost({ addPost }) {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [formData, setFormData] = useState("");

const {
 title,
 description,
 tags,
  } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    addPost(formData, navigate, addPost ? true : false);
  };

  const navigate = useNavigate();

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <>
    <form className="form" onSubmit={onSubmit}>
      <div className="row">
        <div className="col-md-2">
          <SideBar />
        </div>

        <div
          className="col-md-10"
          onSubmit={(e) => {
            e.preventDefault();
            addPost({ text });
            setText("");
          }}
        >
         <Navbar />
          <div className="row">
            <div className="d-flex justify-content-start mx-4 my-4">
              <h5 className={classes.myPost}>My Post</h5>
              <div className={classes.line}></div>
              <h5 className={classes.writePost} style={{ marginLeft: 20 }}>
                Write New Post
              </h5>
            </div>
            <div>
              <div
                className="card jusitfy-content-center "
                style={{
                  width: "90%",
                  backgroundColor: "#1B1B17",
                  border: "1px solid #353535",
                  borderRadius: 20,
                }}
              >
                <div className="d-flex justify-content-center my-4">
                  <input
                    className={classes.inputTitle}
                    type="text"
                    placeholder="Title goes here"
                    value={title}
                    onChange={onChange}
                    name="title"
                  />
                  <div className="d-flex justify-content-between">
                    <div className={classes.dropdown}>
                      <h6 className={classes.writeTitle}>Catagory:</h6>
                      <select
                        className="form-control"
                        style={{
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
                    <form>
                      <input
                        className="fileInput"
                        label="upload file"
                        type="file"
                      />
                      <div id="upload-msg"></div>
                    </form>

                    <h6 className={classes.dragText}>
                      Drag and drop an image,
                      <span style={{ color: "#E13D7E" }}> or Browse</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className=" d-flex justify-content-start mt-4">
              <textarea
                type="textarea"
                className={classes.textArea}
                style={{}}
                placeholder="Write about you blog and information you want to share"
                name="description"
                value={description}
                onChange={onChange}
              />
            </div>
            <div className="d-flex justify-content-start mt-4">
              <input
                className={classes.inputTags}
                name="tags"
                value={tags}
                onChange={onChange}
                placeholder="add atleast 5 tags"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button
              className={classes.buttonPublish}
              type="submit"
              value="Submit"
            >
              Publish
            </button>
          </div>
        </div>
      </div>
      </form>
    </>
  );
}

WritePost.propTypes = {
  addPost: propTypes.func.isRequired,
};

export default connect(null, { addPost })(WritePost);
