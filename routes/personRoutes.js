import express from 'express';
const router = express.Router();
import person from './../models/Person.js'
//post is used to post data to database
router.post('/',async (req,res)=>{
  try{
      const data = req.body // basically body parser store data in req.body
      //create a new person document using the mongoose model
      const newPerson = new person(data);

      // newPerson.name = data.name;
      // newPerson.age = data.age;
      // newPerson.mobile = data.mobile;
      // newPerson.email = data.email;
      // newPerson.adress = data.adress;

      //now save newPerson to database
      const response = await newPerson.save();// wait untill data saved
      console.log('data saved');
      res.status(200).json(response);

  }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal server error'});

  }
})

//now using get to get data from database
router.get('/',async (req,res)=>{
  try{
    const data = await person.find();
    console.log('data fetched');
    res.status(200).json(data);

  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
  }
})

//now defining more endpoints like ,chef ,manager,waiter

router.get('/:workType',async (req,res)=>{

    const workType = req.params.workType; //extract the work type from the url parameter
    try{
        if(workType=='chef'||workType=='manager'||workType=='waiter'){
            const response = await person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);
        }else{

            res.status(404).json({error:'Invalid work type'});
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    } 
})


//update operation in the existing data 

router.put('/:id', async(req,res)=>{
    try{ // client send the id and the updated data we can access them below 
        const personId = req.params.id; //extract id from URL parameter
        const updatedPersonData = req.body; //Updated data for the person

        const response = await person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true, // return the updated document
            runValidators:true,
        })

        if(!response){
            return res.status(404).json({error:'Person not found'})
        }
        console.log('data updated')
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }


})


///delete from a database
router.delete('/:id',async(req,res)=>{
    try{
        const personId = req.params.id; //extract persons Id

        console.log('Deleting person with ID:', personId);

        const response = await person.findByIdAndDelete(personId);
  
        if(!response){
            return res.status(404).json({error:'Person not found'})
        }      

        console.log('data deleted');
        res.status(200).json({message:'person deleted successfully'});


    }catch(err){
        console.error('Error deleting person:', err.message);
        res.status(500).json({error:'Internal server Error',details:err.message});
    }
})


export default router;