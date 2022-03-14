const express  = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dbConnect = require('../config/connect');
const app = express();
const usersRoute = require('./routes/UsersRoute');
const error = require('./middlewares/errorMiddlewareHandler');
const BookRouter = require('./routes/BooksRoute');

dotenv.config();

//passing body data
app.use(express.json());

//connect DB
dbConnect();
const PORT = process.env.PORT || 5000;

//Routes 
//Users
app.use('/api/users',usersRoute);

//Book Router
app.use('/api/books',BookRouter);
//Error middleware
app.use(error.errorMiddlewareHandler);

app.listen(5000,()=>{
    console.log(`Server is up and running`);
})

//5KOurA4qsbxEXFtX
//mongodb+srv://avd:<password>@cluster0.hrm0w.mongodb.net/test