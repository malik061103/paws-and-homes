import { gql } from '@apollo/client';

export const ADD_PET = gql `
    mutation addPet($species: String!, $breed: String!, $age: Int, $size:String, $name: String!, $description: String, $gender:String, $location:String!, $image:String, $adoptionStatus: String!) {
            addPet(species: $species, breed: $breed, age: $age, size: $size, name: $name, description: $description, gender: $gender, location: $location, image: $image, adoptionStatus: $adoptionStatus) {
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

export const REMOVE_PET = gql `
    mutation removePet($petId: ID!){
        removePet(petId: $petId){
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

export const UPDATE_PET = gql `
    mutation updatePet($species: String!, $breed: String!, $age: Int, $size:String, $name: String!, $description: String, $gender:String, $location:String!, $image:String, $adoptionStatus: String!){
            updatePet(species: $species, breed: $breed, age: $age, size: $size, name: $name, description: $description, gender: $gender, location: $location, image: $image, adoptionStatus: $adoptionStatus){
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