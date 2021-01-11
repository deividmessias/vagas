const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./src/routes.js');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/salestime' ,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
},function(err){
    if(err){
        console.log(err)
    }else{
        console.log('MongoDB CONECTADO com sucesso!')
    }
})

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port,function(){
    console.log(`Server runing on port ${port}`)
});