const typeDefs = `
    type Pet {
        _id: ID
        species: String
        breed: String
        age: Int
        size: String
        name: String
        description: String
        gender: String
        location: String
        image: String
        adoptionStatus: String
    }   
    
    type Application {
        _id: ID
        firstName: String
        lastName: String
        phoneNumber: String
        email: String
        description: String
        applicationStatus: String
        pet: String
    }
    
    type Query {
        pets: [Pet]!
        pet(petId: ID!): Pet
    }
    
    type Mutation {
       addPet(species: String!, breed: String!,age: Int,size:String,name: String!,description: String,gender:String,location:String!,image:String,adoptionStatus: String!): Pet
       removePet(petId:ID!): Pet 
       updatePet(petId:ID!, species: String, breed: String,age: Int,size:String,name: String,description: String,gender:String,location:String,image:String,adoptionStatus: String):Pet
       addAplication(firstName:String!,lastName:String!,phoneNumber:Int!,email:String,description:String!,applicationStatus:String!,pet:Schema.Types.ObjectId!):Application
       }
 `;
module.exports = typeDefs;