const { petSchema } = require('../models');

const resolvers = {
    Query: {
        pets: async () => {
            return petSchema.find();
        },

        pet: async(parent, { petId }) => {
            return petSchema.findOne({ _id: petId });
        },
    },

    Mutation: {
        addPet: async (parent, { species, breed }) => {
            return petSchema.create({ species, breed });
        },
        removePet: async (parent, { petId }) => {
            return petSchema.findOneAndDelete({ _id: petId });
        },

    },

};

module.exports = resolvers;

   