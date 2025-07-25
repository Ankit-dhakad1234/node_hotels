//mangoose is used to make connection between database and nodejs
//this file is responsible for that above connection 
//there we write database connections only
//mongoose act as a bridge
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables

import mongoose from 'mongoose';

//define the mongoDB connection URL 
// const mongoURL = 'mongodb://localhost:27017/hotels' //we can replace mydatabase with our own database name

// const mongoDBURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGO_URL;

// const mongoURL = 'mongodb+srv://Ankit_Dhakad:complex1234@cluster0.zxq4njj.mongodb.net/'
//set up mongoDB connection 
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
     
})
//get the default connection
//mongoose maintains a default connection object representing the mongoDB connection

const db = mongoose.connection;


//define event listners for database connections
//these connected,error,disconnected are inbuild 
//and easily understand by the db object

db.on('connected',()=>{
    console.log('connected to mongoDB server')
})

db.on('error',(err)=>{
    console.error('connected to mongoDB server')
})

db.on('disconnected',()=>{
    console.log('disconnected to mongoDB server')
})

//now export the database connection 
// module.exports = db;
export default mongoose;
