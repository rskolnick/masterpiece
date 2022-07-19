import { Schema, model, models } from 'mongoose';

const distributorSchema = new Schema({
    name: {
        type: String,
        unique: true,
    },
    territory: [String],
    location: [{
        address: String,
        city: String,
        state: String,
        zip: String,
        phone: String,
        main: Boolean,
    }],
    credit_status: String,
    balance: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
});
const Distributor =
    models.Distributor || model('Distributor', distributorSchema);
module.exports = Distributor;
