<<<<<<< HEAD
const { Schema} = reqiured('mongoose');
=======
const { Schema } = require('mongoose');
>>>>>>> c5867d95ea688cc8a668a4ab0dbc37eafe9c6474

const petSchema = new Schema(
    {
        species: {
<<<<<<< HEAD
            type:String
        },
        breed: {
            type:String
=======
            type:String,
        },
        breed: {
            type:String,
>>>>>>> c5867d95ea688cc8a668a4ab0dbc37eafe9c6474
        },
        age: {
            type: Number,
        },
        size: {
<<<<<<< HEAD
            type:String
=======
            type:String,
>>>>>>> c5867d95ea688cc8a668a4ab0dbc37eafe9c6474
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
<<<<<<< HEAD
            type:String
        },
        Location:{
            type:String,
            required:true
        },
        image:{
         type:String
        },
        adoptionstatus:{
            type:String,
            required:true
        },

    }
=======
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
>>>>>>> c5867d95ea688cc8a668a4ab0dbc37eafe9c6474
)

module.exports = petSchema;