const express = require("express");
const connectDB = require("./config/db");
const app = express();
require("dotenv").config();

//connect db
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

//Routes
app.use("/user_apis/", require("./Routes/user"));
app.use("/post_apis/", require("./Routes/post"));
app.use("/auth_apis/", require("./Routes/auth"));

// Middle ware
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
