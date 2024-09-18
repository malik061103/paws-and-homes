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