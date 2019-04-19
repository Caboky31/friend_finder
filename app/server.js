var express = require("express");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 8040;

app.use(express.urlencoded({extended: true}));
app.use(express.json());


require("./routing/apiRoutes")(app);

require("./routing/htmlRoutes.js")(app);




app.listen(PORT, function() {
    console.log("Your app is fucking listening: " + PORT);
})