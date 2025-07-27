import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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
    },
    username:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    }
});

//for password encryption 
personSchema.pre('save',async function(next){
    const person = this;

    //hash the password only if its modified
    if(!person.isModified('password')) return next();
    try{
        //hash password generation
        const salt = await bcrypt.genSalt(10);

        //hash password
        const hashedPassword = await bcrypt.hash(person.password,salt);

        //override the plain password with the hashed password
        person.password = hashedPassword;
        next();
    }catch(err){
        return next(err);
    }
})

personSchema.methods.comparePassword = async function(candidatePassword){
    try{
        const isMatch = await bcrypt.compare(candidatePassword,this.password);
        return isMatch;
    }catch(err){
        throw err;
    }
}

//create person model
const person = mongoose.model('person',personSchema);
// module.exports = person; 
export default person;
