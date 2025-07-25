import express from 'express';
const app = express();
import db from './db.js'; 
import person from './models/Person.js'
import MenuItem from './models/MenuItem.js';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables


import bodyParser from 'body-parser';
app.use(bodyParser.json()); //data stored at req.body

app.get('/', (req, res) => {
  res.send('Welcome to our hotel')
})

// app.get('/machurian', (req, res) => {
//   res.send('Want a machurian')
// })

// app.post('/person',(req,res)=>{
//   res.send('data is saved');
// })


//import the router fiiles
import personRoutes from './routes/personRoutes.js'
//use the routers
app.use('/person',personRoutes);

import menuItemRoutes from './routes/menuItemRoutes.js'
app.use('/menuItem',menuItemRoutes);

const PORT = process.env.PORT || 5050;

app.listen(PORT,()=>{
  console.log('server is listning on port 5050 and is live')
}) // your server find at 3000

//basically we have to savr this data to the database

