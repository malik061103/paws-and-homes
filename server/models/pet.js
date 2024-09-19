const { Schema } = require('mongoose');

const petSchema = new Schema(
    {
        species: {
            type:String,
        },
        breed: {
            type:String,
        },
        age: {
            type: Number,
        },
        size: {
            type:String,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            minimum:0,
            maximum:100,
        },
        gender:{
            type:String,
        },
        location:{
            type:String,
            required:true,
        },
        image:{
         type:String,
        },
        adoptionStatus:{
            type:String,
            required:true,
        },

    },
)

module.exports = petSchema;