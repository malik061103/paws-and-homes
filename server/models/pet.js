const { Schema} = reqiured('mongoose');

const petSchema = new Schema(
    {
        species: {
            type:String
        },
        breed: {
            type:String
        },
        age: {
            type: Number,
        },
        size: {
            type:String
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
)

module.exports = petSchema;