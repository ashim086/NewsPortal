import { Schema } from "mongoose";

const NewsSchema = new Schema({
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    journalist: { type: Schema.Types.ObjectId, ref: "journalist", required: true }, // Link to journalist
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    },
    picture: { type: String ,required:true}, // Stores GridFS filename
    comments: [{
        user: { type: Schema.Types.ObjectId, ref: "User" }, // Viewer who commented
        text: String,
        createdAt: { type: Date, default: Date.now }
    }]
})