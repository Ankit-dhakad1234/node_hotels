import mongoose from 'mongoose';

//define the person schema 
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true // it means name is necesssary
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true 
    },
    adress:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }
});

//create person model
const person = mongoose.model('person',personSchema);
// module.exports = person; 
export default person;
