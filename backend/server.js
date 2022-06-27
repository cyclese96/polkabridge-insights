const express = require("express");
const connectDB = require("./config/db");
const app = express();

//connect db
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

//Routes
app.use("/api/users", require("./Routes/users"));
app.use("/api/profile", require("./Routes/profile"));
app.use("/api/post", require("./Routes/post"));
app.use("/api/auth", require("./Routes/auth"));

// Middle ware
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
