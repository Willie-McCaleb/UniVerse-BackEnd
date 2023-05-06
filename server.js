import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import savedEventsRoute from "./routes/savedEvent.route.js";
import messageRoute from "./routes/message.route.js";
import membersRoute from "./routes/member.route.js";
import followersRoute from "./routes/follower.route.js";
import eventsRoute from "./routes/event.route.js";
import conversationRoute from "./routes/conversation.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

// Middleware
app.use(cors({ origin: "https://UniVerse.onrender.com", credentials: true }));
app.use(express.json()); //sending information using postman json
app.use(cookieParser());

app.use("/api/users", userRoute);
app.use("/api/savedEvents", savedEventsRoute);
app.use("/api/message", messageRoute);
app.use("/api/members", membersRoute);
app.use("/api/followers", followersRoute);
app.use("/api/events", eventsRoute);
app.use("/api/conversation", conversationRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Error, Something messed up!";

  return res.status(errorStatus).send(errorMessage);
});

app.listen(8800, () => {
  connect();
  console.log("Backend server is running");
});
