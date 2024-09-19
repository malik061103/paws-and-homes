<<<<<<< HEAD
const { Schema } = reqiured('mongoose');

const applicantionSchema = new Schema(
    {
    firstName:{
        type:String,
        reqiured:true,
        
    },
    lastName:{
        type:String,
        reqiured:true
    },
    phoneNummber:{
        type:Number,
        reqiured:true
    },
    email:{
        type:String,
        reqiured:true,
        unique:true
    },

    }
)

module.exports = applicantionSchema;
=======
const { Schema } = require('mongoose');

const applicationSchema = new Schema(
    {
    firstName:{
        type: String,
        required: true,
        
    },
    lastName:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },

    },
)

module.exports = applicationSchema;
>>>>>>> c5867d95ea688cc8a668a4ab0dbc37eafe9c6474
