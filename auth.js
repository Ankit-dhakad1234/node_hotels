import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import person from './models/Person.js'


passport.use(new LocalStrategy(async (USERNAME,password,done)=>{
  //authentication logic
  try{
    // console.log('Received credentials:',USERNAME,password);
    const user = await person.findOne({username:USERNAME});

    if(!user){
      return done(null,false,{message:'Incorrect username.'});
    }

    const isPasswordMatch = await user.comparePassword(password);

    if(isPasswordMatch){
      return done(null,user)
    }else{
      return done(null,false,{message:'Incorrect password.'})
    }


  }catch(err){
      return done(err);
  }
}))

export default passport;