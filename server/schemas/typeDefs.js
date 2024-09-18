const typeDefs = `
    type Pet {
        _id: ID
        species: String
        breed: String
        age: String
        size: String
        name: String
        description: String
        gender: String
        location: String
        image: String
        adoptionStatus: String
    }   
    
    type adoptionApp {
        _id: ID
        firstName: String
        lastName: String
        phoneNumber: 
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
       addPet(species: String!, breed: String!): Pet
       removePet(petId:ID!): Pet 
    }
 `;
module.exports = typeDefs;