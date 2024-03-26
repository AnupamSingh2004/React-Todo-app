const express = require("express");

require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./Routes/Todos");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDb connected succesfully");
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/api", router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
