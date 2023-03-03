const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const routeHandler = require('./src/routes');

const app = express();

dotenv.config();
const { mongodbOptions } = require('./src/config');

const { PORT, HOST, MONGODB_DEV, MONGODB_PROD, ENV_MODE } = process.env;

mongoose.set('strictQuery', false);

mongoose
  .connect(ENV_MODE === 'dev' ? MONGODB_DEV : MONGODB_PROD, mongodbOptions)
  .then(() => console.log('Successfully connected to MongoDb'))
  .catch((e) => console.log('Could not connect to MongoDb', e));

app.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000 }));
app.use(express.json({ limit: '50mb', extended: true }));
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use('/api/v1/', routeHandler);

app.use((req, res) => res.status(404).json({ error: 'We cannot get what you are looking for!' }));

app.listen(PORT, () => {
  console.log(`APP RUNNING ON ${HOST}:${PORT}`);
});
