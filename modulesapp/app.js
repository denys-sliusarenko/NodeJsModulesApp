// get Express module
const express = require("express");
// create application
const app = express();
 
// install  handler for route "/"
app.get("/", function(request, response){
 
    response.end("Hello from Express!");
});
//listening on port 3000
app.listen(3000);