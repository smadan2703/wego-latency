const express = require("express");
const https = require("https");
const fs = require("fs");
const noCache = require('nocache');
const routes = require("./routes");

// App
const app = express();
app.use(noCache());
app.set('etag', false);

// Set port
const port = process.env.PORT || 443; // Default HTTPS port
app.set("port", port);

app.use('/', routes);

// HTTPS options
const options = {
  key: fs.readFileSync("/root/wego-latency/private.pem"),
  cert: fs.readFileSync("/root/wego-latency/cert.pem")
};

// Create HTTPS server
const server = https.createServer(options, app);

// Start server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});