const express = require("express");
const connectDB = require("./config/db");
const app = express();

//connect db
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

//Routes
app.use("/api/users", require("./Routes/Users"));
app.use("/api/profile", require("./Routes/Profile"));
app.use("/api/post", require("./Routes/Post"));
app.use("/api/auth", require("./Routes/AuthRoutes"));

// Middle ware
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
