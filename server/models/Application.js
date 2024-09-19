const { Schema,model } = required('mongoose');

const applicationSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true
        },
        phoneNumber: {
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
            minlength: 0,
            maxlength: 100,
        },
        applicantionStatus: {
            type: String,
            required: true
        },
        pet: {
            type: Schema.types.ObjectId,
            ref:"Pet",
            required:true
        },
    }
)
const Application = model("Application",applicationSchema)

module.exports = applicationSchema;