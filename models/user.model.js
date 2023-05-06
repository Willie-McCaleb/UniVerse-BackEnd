import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    school: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: false,
    },
    followers: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    //createdAt: a date representing when this document was created
    //updatedAt: a date representing when this document was last updated
  }
);

export default mongoose.model("User", userSchema);
