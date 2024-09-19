const { Schema,model} = required('mongoose');

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