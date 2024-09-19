const { Schema,model} = required('mongoose');

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
            minlength:0,
            maxlength:100,
        },
        gender:{
            type:String
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
const Pet = model("Pet",petSchema)

module.exports = Pet;