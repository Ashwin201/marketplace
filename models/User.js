import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Username is required."],
    },

    email: {
      type: String,
      unique: [true, "Email already exists."],
    },
    password: {
      type: String,
    },

    wishlist: {
      type: Array,
      default: [],
    },
    cart: {
      type: Array,
      default: [],
    },
    order: {
      type: Array,
      default: [],
    },
    work: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
