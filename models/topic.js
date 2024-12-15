import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true }
    },
    {
        timestamps: true,
    }
);

// Check if the model is already created (to prevent overwriting the model)
const Topic = mongoose.models.Topic || mongoose.model('Topic', topicSchema);

export default Topic;
