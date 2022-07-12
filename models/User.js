import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, // setting the email to lowercase to ensure correct checks
    },
    password: String,
    work_phone: String,
    cell_phone: String,
    active: {
        type: Boolean,
        default: 'true',
    },
    role: {
        type: String,
        required: true,
        uppercase: true, // setting role to uppercase to ensure correct checks
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
});

const User = models.User || model('User', userSchema);

export default User;
