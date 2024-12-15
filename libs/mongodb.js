import mongoose from "mongoose";

const connectMongoDB = async () => {
    if (mongoose.connections[0].readyState) {
        console.log("Already connected to MongoDB");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        throw new Error('Failed to connect to MongoDB');
    }
};

export default connectMongoDB;
