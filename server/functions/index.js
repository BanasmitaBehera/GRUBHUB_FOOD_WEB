const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");
const express = require("express");
const app = express();
 // new change
const stripe = require("./routes/stripe");


require('dotenv').config();

const serviceAccountKey = require("./serviceAccountKey.json");



//Body parse for our JSON data
app.use(express.json());

//cors origin

app.use(cors({origin: true}));
app.use("/api/stripe",stripe);
app.use((req, res ,next) => {
    res.set("Access-Control-Allow-Origin","*");
    next();
});

//firebase credentials
admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
});

//api endpoints
app.get("/", (req, res) => {
   return res.send("Hello World!");
});

const userRoute = require("./routes/user");
app.use("/api/user",userRoute); //users is replaced



exports.app = functions.https.onRequest(app);

