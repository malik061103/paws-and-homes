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