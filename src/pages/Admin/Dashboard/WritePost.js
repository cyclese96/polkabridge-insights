import React, { useState } from "react";
import SideBar from "../../../common/SideBar";
import { useTheme } from "@mui/styles";
import { makeStyles } from "@material-ui/core";
import upload from "../../../assets/upload.png";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { ADD_POSTS } from "../../../actions/types";
import { addPost } from "../../../actions/newsActions";
import { Link, useNavigate } from "react-router-dom";
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
    height: 40,
    background: "linear-gradient(110.85deg, #F98DC8 -25.63%, #E0077D 157.96%)",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    fontWeight: 600,
    marginBottom:10,
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
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
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
    color: "#FFFFFF",
    [theme.breakpoints.down("md")]: {
      width: "80%",
      marginLeft: "10px",
      height: "35px",
      padding: "8px",
    },
  },
  textArea: {
    backgroundColor: "#1B1B1B",
    border: "2px solid #353535",
    borderRadius: 10,
    width: "80%",
    height: "100px",
    color: "#DCDCDC",
    paddingLeft: "5px",
    paddingTop: "5px",
  },
  inputTags: {
    backgroundColor: "#1B1B1B",
    border: "2px solid #353535",
    borderRadius: 10,
    width: "80%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    color: "#DCDCDC",
    paddingLeft: "5px",
  },
  cardMain: {
    width: "90%",
    backgroundColor: "#1B1B17",
    border: "1px solid #353535",
    borderRadius: 20,
  },
  cardWrapper: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  form: {
    height: "40px",
    border: "2px solid #353535",
    backgroundColor: "transparent",
    marginRight: 10,
    color: "white",
    borderRadius:"10px",
    padding:'2px',
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  cardImage: {
    width: "80%",
    backgroundColor: "#1B1B17",
    border: "1px dotted #FFFFFF",
    borderRadius: 20,
  },
}));

function WritePost({ addPost }) {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
    category: "",
    readTime: "",
  });
  const [imageFile, setImage] = useState(null);
  const [imageName, setImageName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("content", formData.content);
    data.append("tags", formData.tags);
    data.append("image", imageFile);
    data.append("category", formData.category);
    data.append("readTime", formData.readTime);
    addPost(data);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileSelect = (event) => {
    setImage(event.target.files[0]);
    setImageName(event.target.files[0]?.name);
  };
  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>

          <div className="col-md-10">
            <Navbar />
            <div className="row">
              <div className="d-flex justify-content-start mx-4 my-4">
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                  <h5 className={classes.myPost}>My Post</h5>
                </Link>
                <div className={classes.line}></div>
                <h5 className={classes.writePost} style={{ marginLeft: 20 }}>
                  Write New Post
                </h5>
              </div>
              <div className={classes.cardWrapper}>
                <div className={classes.cardMain}>
                  <div className="d-flex justify-content-center my-4">
                    <input
                      className={classes.inputTitle}
                      type="text"
                      key="{title}"
                      placeholder="Title goes here"
                      value={formData.title}
                      onChange={onChange}
                      name="title"
                    />
                    <div className="d-flex justify-content-between">
                      <div className={classes.dropdown}>
                        <h6 className={classes.writeTitle}>Catagory:</h6>
                        <select className={classes.form}>
                          <option value="beginner">Select</option>
                          <option value="beginner">Beginner</option>
                          <option value="moderator">Coins & Tokens</option>
                          <option value="fluent">Ecosystems</option>
                          <option value="fluent">Defi Basics</option>
                          <option value="fluent">NFT</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className={classes.cardImage}>
                      <img
                        className={classes.uploadImage}
                        src={upload}
                        alt="image-logo"
                      />
                      <form>
                        <input
                          className={classes.dragText}
                          label="upload file"
                          type="file"
                          name="image"
                          key="{image}"
                          onChange={handleFileSelect}
                        />
                        <div id="upload-msg"></div>
                      </form>

                      <h6 className={classes.dragText}>
                        Drag and drop an image,
                        <span style={{ color: "#E13D7E" }}> or Browse</span>
                      </h6>
                    </div>
                  </div>
                  <div className=" d-flex justify-content-center mt-4">
                    <textarea
                      type="textarea"
                      className={classes.textArea}
                      style={{}}
                      placeholder="Write about you blog and information you want to share"
                      name="content"
                      key="{content}"
                      value={formData.content}
                      onChange={onChange}
                    />
                  </div>
                  <div className="d-flex justify-content-center mt-4">
                    <input
                      className={classes.inputTags}
                      name="tags"
                      value={formData.tags}
                      onChange={onChange}
                      key="{tags}"
                      placeholder="add atleast 5 tags"
                    />
                  </div>
                  <div className="d-flex justify-content-center mt-4">
                    <input
                      className={classes.inputTags}
                      name="readTime"
                      value={formData.readTime}
                      onChange={onChange}
                      key="{readTime}"
                      placeholder="add read time"
                    />
                  </div>{" "}
                  <div className="d-flex justify-content-center mt-4">
                    <input
                      className={classes.inputTags}
                      name="category"
                      key="{category}"
                      value={formData.category}
                      onChange={onChange}
                      placeholder="add category"
                    />
                  </div>
                  <div className="d-flex justify-content-center mt-4">
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <button
                        className={classes.buttonPublish}
                        type="submit"
                        value="Submit"
                      >
                        Publish
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
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
