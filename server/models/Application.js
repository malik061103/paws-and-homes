const { Schema } = reqiured('mongoose');

const applicantionSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,

        },
        lastName: {
            type: String,
            required: true
        },
        phoneNummber: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            minimum: 0,
            maximum: 100,
        },
        applicantionStatus: {
            type: String,
            required: true
        },
        pet: {
            type: String,

        }
    }
)

module.exports = applicantionSchema;