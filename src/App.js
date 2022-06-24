import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment, useState } from "react";
import LogIn from "./pages/Admin/Auth/LogIn";
import SignUp from "./pages/Admin/Auth/SignUp";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import WritePost from "./pages/Admin/Dashboard/WritePost";
import LivePost from "./pages/Admin/Dashboard/LivePost";
import PendingPost from "./pages/Reader/PendingPost";
import Profile from "./pages/Reader/Profile";
import TrendingArticles from "./pages/Reader/TrendingArticles";
import SuperAdminDashboard from "./pages/Admin/Dashboard/SuperAdminDashboard";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Writepost" element={<WritePost />} />
            <Route path="/Livepost" element={<LivePost />} />
            <Route path="/Pendingpost" element={<PendingPost />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/AdminDashboard" element={<SuperAdminDashboard />} />
            <Route path="/Trending/Article" element={<TrendingArticles />} />
          </Routes>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;
