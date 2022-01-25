require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const dataIngestionRouter = require('./src/API/routers/dataIngestionRouter');
const dataRetrievalRouter = require('./src/API/routers/dataRetrievalRouter');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', dataIngestionRouter);
app.use('/private', dataRetrievalRouter);

// Mongo DB connection

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port : ${port}`);
    });
  });
