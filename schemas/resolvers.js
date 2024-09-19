const { Pet } = require('../models');

const resolvers = {
    Mutation: {
        deletePet: async (_, {id}) => {
            try {
                //Find the Pet by ID and remove it
                const deletePet = await Pet.findByIdAndDelete(id);

                //If the pet is deleted
                if (!deletePet) {
                    throw new Error('Pet not found');
                }

                //Return a succes message
                return {
                    message: 'Pet deleted successfully',
                    user: deletePet,
                };
            } catch (error) {
                //Handle errors
                throw new Error ('Error deleting pet: ${error.message');
            }
        },
    },
};
module.exports = resolvers;