import mongoose from 'mongoose';

const connectMongo = async () => {
    console.log('from connection');
    mongoose.connect(process.env.MONGODB_URI);
};

export default connectMongo;
