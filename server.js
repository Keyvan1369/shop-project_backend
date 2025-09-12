const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const authRouter = require("./routes/authRouter");
const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const contactRouter = require("./routes/contactRouter");

const app = express();
const port = process.env.PORT || 5020;


const allowedOrigins = [
  "http://localhost:5173", 
  "https://shop-project-e8tg.onrender.com", 
  "https://shop-project-frontend12.vercel.app/"
  
];

app.use(express.json());
/* app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
); */
app.use(cors({ origin: true, credentials: true }));


app.use("/api", authRouter);
app.use("/api", indexRouter);
app.use("/api", userRouter);
app.use("/api", productRouter);
app.use("/api", contactRouter);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to DB:", err));


app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
