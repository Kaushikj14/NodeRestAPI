import express from 'express';
// const express = require('express'); same as above
import bodyParser from 'body-parser'; // allows to take in request bodies
import usersRoutes from './routes/users.js'

const app = express();
const PORT = 6001;

app.use(bodyParser.json()); //tells us that we are going to be using json data in our whole app.

// all routes in here are starting with route /users
app.use('/users',usersRoutes);


// creating routes
// requesting get request
app.get('/users',(req,res)=>{
    // console.log('[TEST]!');
    res.send('Hello from Homepag.')
});

app.listen(PORT,()=>{console.log(`Server running on port: http://loacalhost:${PORT}`)});