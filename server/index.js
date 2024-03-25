const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./Routes/Todos");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
