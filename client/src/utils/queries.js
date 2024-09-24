import { gql } from '@apollo/client';

export const QUERY_PETS = gql`
    query getPets {
        pets {
        _id
        species
        breed
        age
        size
        name
        description
        gender
        location
        image
        adoptionStatus
        }
    }
`;

export const QUERY_ONE_PET = gql`
    query singlePet($petId: ID!) {
        pet(petId: $petId) {
            _id
        species
        breed
        age
        size
        name
        description
        gender
        location
        image
        adoptionStatus
        }
    }
`;

