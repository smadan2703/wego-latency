const express = require("express");
const noCache = require('nocache');
const routes = require("./routes");


// App
const app = express();
app.use(noCache());
app.set('etag', false);
// Set port
const port = process.env.PORT || "80";
app.set("port", port);

app.use('/', routes);

// Server
app.listen(port, () => console.log(`Server running on localhost:${port}`));
