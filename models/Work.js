import mongoose, { Schema, models } from "mongoose";

const workSchema = new Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    category: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    images: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Work = models.Work || mongoose.model("Work", workSchema);
export default Work;
