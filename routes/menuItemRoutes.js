import express from 'express';
const router = express.Router();
import MenuItem from './../models/MenuItem.js';

router.post('/',async (req,res)=>{
  try{
    const data = req.body
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log('data saved');
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
  }

})

router.get('/',async (req,res)=>{
  try{
    const data = await MenuItem.find();
      console.log('data fetched');
      res.status(200).json(data);

  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
  }
})

//DYS
// router.get('./:taste',asyn(res,req)=>{
//     try{
        
        
//     }catch(err) {
        
//     }


// })


export default router;
