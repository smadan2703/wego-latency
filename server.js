const express = require("express");
const https = require("https");
const fs = require("fs");
const noCache = require('nocache');
const routes = require("./routes");
const cors = require('cors'); // Import cors middleware
const path = require('path');

// App
const app = express();
app.set('etag', false);

// Enable CORS for all routes
app.use(cors());
app.use(noCache());

// Set port
const port = process.env.PORT || 443; // Default HTTPS port
app.set("port", port);

app.use('/', routes);


const privateKeyPath = path.join(__dirname, '/private.pem');
const certificatePath = path.join(__dirname, '/cert.pem');

// HTTPS options
const options = {
    key: fs.readFileSync(privateKeyPath),
    cert: fs.readFileSync(certificatePath)
  };

// Create HTTPS server
const server = https.createServer(options, app);

// Start server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
