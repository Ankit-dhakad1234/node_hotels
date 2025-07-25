//mangoose is used to make connection between database and nodejs
//this file is responsible for that above connection 
//there we write database connections only
//mongoose act as a bridge

import mongoose from 'mongoose';

//define the mongoDB connection URL 
const mongoURL = 'mongodb://localhost:27017/hotels' //we can replace mydatabase with our own database name


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

db.on('error',()=>{
    console.log('connected to mongoDB server')
})

db.on('disconnected',()=>{
    console.log('disconnected to mongoDB server')
})

//now export the database connection 
// module.exports = db;
export default mongoose;
