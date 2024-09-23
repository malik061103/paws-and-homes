const { petSchema, applicationSchema } = require('../models');


const resolvers = {
    Query: {
        pets: async () => {
            return petSchema.find();
        },

        pet: async (parent, { petId }) => {
            return petSchema.findOne({ _id: petId });
        },
        application: async () => {
            return applicationSchema.find();
        },

    application: async (parent, { applicationId }) => {
            return applicationSchema.findOne({ _id: applicationId });
        },
    },

    Mutation: {
        addPet: async (parent, { petId ,species, breed, age, size, name, description, gender, location, image, adoptionStatus }) => {
            return petSchema.create({ petId, species, breed, age, size, name, description, gender, location, image, adoptionStatus });
        },
        removePet: async (parent, { petId }) => {
            return petSchema.findOneAndDelete({ _id: petId });
        },
        updatePet: async (parent, { petId, species, breed, age, size, name, description, gender, location, image, adoptionStatus }) => {
            const updatedPet = await petSchema.findByIdAndUpdate(petId, { species, breed, age, size, name, description, gender, location, image, adoptionStatus },
                {new:true}
            )
            return updatedPet
        },
        addApplication :async(parent,{firstName,lastName,phoneNumber,email,description,applicationStatus,Pet})=>{
            return applicationSchema.create({firstName,lastName,phoneNumber,email,description,applicationStatus,Pet})
        },
    },

};

module.exports = resolvers;

