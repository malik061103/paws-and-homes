const { Pet } = require('../models');

const resolvers = {
    Query: {
        pets: async () => {
            return Pet.find();
        },

        pet: async(parent, { petId }) => {
            return Pet.findOne({ _id: petId });
        },
    },

    Mutation: {
        addPet: async (parent, { species, breed }) => {
            return Pet.create({ species, breed });
        },
        removePet: async (parent, { petId }) => {
            return Pet.findOneAndDelete({ _id: petId });
        },

    },

};

module.exports = resolvers;

   