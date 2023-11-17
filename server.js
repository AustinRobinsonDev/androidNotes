const express = require("express");
const connectDB = require("./config/db");
const app = express();

// if auth is passed as a parameter to a route, the route will be private and require a token

connectDB();
app.use(express.json({ extended: false }));
app.use("/api/notes", require("./routes/notes"));
app.use("/api/users", require("./routes/users"));
// app.use("/api/auth", require("./routes/auth"));
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
