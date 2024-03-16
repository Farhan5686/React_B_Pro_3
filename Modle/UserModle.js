const mongoos = require('mongoose')


const dataSchema = new mongoos.Schema(
    {
        userName:{
            require:true,
            type:String
        },
        email:{
            require:true,
            type:string
        },
        password:{
            require:true,
            type:String
        },
        phone:{
            type:Number,
            require:true
        }

});
module.exports = mongoos.model('userDataMong',dataSchema)