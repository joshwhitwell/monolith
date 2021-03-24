//imports required modules
const express = require("express");
const path = require("path");

//grabs port number from process environment or 3000
const PORT = process.env.PORT || 3000;

//initializes an express server
const server = express();

//configures server to handle JSON requests
server.use(express.json());

//configures server to serve client build
server.use(express.static(path.join(__dirname, "client/build")));

//endpoints
server.get("/api", (req, res) => {
    res.json({ message: "API running" });
});

//fallback endpoint serves client index.html
server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

//configures server to listen on port
server.listen(PORT, () => {
    console.log(`\n*** Server listening on port: ${PORT} ***\n`);
});