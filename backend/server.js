const express = require('express');
const createError = require('http-errors');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());


//app.use(cors({
  //origin: 'http://localhost:5173',
  //methods: ['GET', 'POST'], 
  //allowedHeaders: ['Content-Type', 'Authorization'], 
//credentials: true
//}));
  

app.get('/',async(req,res,next) =>{
  res.send({message:'awesome'})
})
app.use('/api',require('./routes/api.route'))



app.use((req,res,next) =>{
    next(createError.NotFound());
});

app.use((err,req,res,next) =>{
    res.status(err.status || 500);
    res.send({
        status:err.status || 500,
        message:err.message,
    });
});





const PORT =process.env.PORT || 3000;
app.listen(PORT, () => console.log(`running in port${PORT}`))