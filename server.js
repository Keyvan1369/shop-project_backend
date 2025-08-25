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
const port = 5020;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api",authRouter);
app.use("/api",indexRouter);
app.use("/api",userRouter);
app.use("/api",productRouter);
app.use("/api",contactRouter);



mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to DB:", err));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
