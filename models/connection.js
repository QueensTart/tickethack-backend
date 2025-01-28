const mongoose = require("mongoose");

const connectionString = "mongodb+srv://Onepieamongmany:OnePieToRuleThemAll@cluster0.iujpl.mongodb.net/tickethack";

mongoose.connect(connectionString, {connectTimeoutMS : 1500})
    .then(() => console.log("Successfully connected to Database!"))
    .catch(error => console.error(error));