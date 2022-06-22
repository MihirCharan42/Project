const express = require("express");
const app = express();
const dotenv= require("dotenv");
const mongoose= require("mongoose");
const authRouter=require("./routes/auth");
const userRouter=require("./routes/users");
const postRouter= require("./routes/posts");
const cors= require("cors");
app.use(cors());
dotenv.config({ path: './Env.env' });

app.use(express.json());

var url="mongodb+srv://bro:bro@resourcesdata.jlc0s.mongodb.net/resourcesdata?retryWrites=true&w=majority";

mongoose.connect(url, {
    useUnifiedTopology:true,
}).then(console.log("Connected to mongo db")).catch(err=> console.log(err));

app.use("/backend/auth",authRouter);
app.use("/backend/users",userRouter);
app.use("/backend/posts",postRouter);

app.listen("5000", () => {
    console.log("backend is running");
});