const { schema, model } = reqiured('mongoose');

const petSchema = new schema(
    {
        species: {
            type:String
        },
        breed: {
            type:String,
            id:Number
        },
        age: {
            type: Number,
        },
        size: {
            type:String
        },
        names: {
            type: String,
            reqiured: true,
        },
        description: {
            type: String,
            reqiured: true,
            minimum:0,
            maximum:100,
        },
        gender:{
            type:String
        },
        Location:{
            type:Number,
        },
        image:{
         type:
        },
        adoptionstatus:{

        }

    }
)

const Pet = model('Pet',petSchema);

module.exports = Pet;