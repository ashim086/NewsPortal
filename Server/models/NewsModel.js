import { model, Schema } from "mongoose";

const NewsSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: [5, "Title is tooShort"]
    },
    description: {
        type: String,
        required: true,
        minlength: [15, "News should be descibed in detail"]
    },
    journalist: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    image: [
        {
            fileName: {
                type: String,
                required: true
            },
            path: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: Schema.Types.ObjectId,
        required: [true, 'categoryID is required'],
        ref: "category"
    },
    date: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    }
}, { timestamps: true })

export const News = model("news", NewsSchema)