const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const application = express();
mongoose.connect("mongodb+srv://mustafa_tola:eLfxZaVvxA74rk88@cluster0-xbmy6.mongodb.net/Cluster0",(err) => {
    if(err) {
        console.log("Database error-----------",err);
    } else {
        console.log("Database is connected");
    }
})
mongoose.Promise = global.Promise;
application.use(bodyParser.json());
application.use(cors());
application.use("/api",require("./routes/api"));

application.use(function(err,req,res,next) {
    // console.log(err);
    res.status(422).send({error: err.message});
})


application.listen(process.env.port || 4000,function() {
    console.log("now listening for requests");
});