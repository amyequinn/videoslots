// server.js
let express = require('express');
let serveStatic = require('serve-static');
const app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 8080;
app.listen(port);
console.log('server started '+ port);
