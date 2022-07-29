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
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    
    <div className="App">
      <Provider store={store}>
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/writepost" element={<WritePost />} />
            <Route path="/livepost" element={<LivePost />} />
            <Route path="/pendingpost" element={<PendingPost />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin/Dashboard" element={<SuperAdminDashboard />} />
            <Route path="/trending/article" element={<TrendingArticles />} />
          </Routes>
        </Router>
      </Fragment>

      </Provider>
    </div>
  );
}

export default App;
