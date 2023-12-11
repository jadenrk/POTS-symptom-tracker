require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const symptomLogRoutes = require('./routes/symptomLogs');
const userRoutes = require('./routes/user');
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    next();
});

// routes
app.use('/api/symptomlogs', symptomLogRoutes);
app.use('/api/user', userRoutes);

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port 4000');
        });
    })
    .catch((err) => {
        console.log(err);
    })