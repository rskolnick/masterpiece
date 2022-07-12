import { Schema, model, models } from 'mongoose';

const distributorSchema = new Schema({
    name: String,
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
});
const Distributor =
    models.Distributor || model('Distributor', distributorSchema);
module.exports = Distributor;
