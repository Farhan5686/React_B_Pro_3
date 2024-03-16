const express = require('express');
const usermodel = require('./Modle/UserModel.js')
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const PORT = 7000;
const app = express();
const URL = 'mongodb://localhost:27017/users'

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('HEllo 4 yaro')
})

app.post('/user',(req, res) => {
    

        const passwordHashed = bcrypt.hash(req.body.password, 10);

        const userData = new usermodle({
            userName: req.body.userName,
            email: req.body.email,
            password: passwordHashed
        });

        const dataSave =  userData.save();

        res.status(201).json({
            ok: true,
            message: 'success',
            data: dataSave
        });
    

});


app.get('/user', (req,res)=>{
   
    const getData = userModle.find();

    res.status(201).json({
        count: getData.length,
        data: getData
    });

   
})

mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('conected');
})
.catch((error)=>{
console.log(error);
})

app.listen(PORT)































// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require ('bcrypt');

// const PORT = 5686;
// const app = express();
// const URL = 
// app.use(express.json());

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')


const PORT = 7000;
const URL = 'mongodb://localhost:27017/users'
const app = express();
app.use(express.json())

app.listen(PORT)

app.get('/',(req,res)=>{

    const getData = userModle.find();
    res.status(201).json({
        count:getData.length,
        message:'succecfull',
        data:getData
    })
})