const { petSchema } = require('../models');

const resolvers = {
    Query: {
        pets: async () => {
            return petSchema.find();
        },

        pet: async (parent, { petId }) => {
            return petSchema.findOne({ _id: petId });
        },
    },

    Mutation: {
        addPet: async (parent, { species, breed, age, size, name, description, gender, location, image, adoptionStatus }) => {
            return petSchema.create({ species, breed, age, size, name, description, gender, location, image, adoptionStatus });
        },
        removePet: async (parent, { petId }) => {
            return petSchema.findOneAndDelete({ _id: petId });
        },
        updatePet: async (parent, { petId, species, breed, age, size, name, description, gender, location, image, adoptionStatus }) => {
            const updatedPet = await petSchema.findByIdAndUpdate(petId, { species, breed, age, size, name, description, gender, location, image, adoptionStatus },
                {new:true}
            )
            return updatedPet
        }
    },

};

module.exports = resolvers;

