import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const memberSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    eventId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    img: {
      type: String,
      required: false,
    },
    isMember: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    //createdAt: a date representing when this document was created
    //updatedAt: a date representing when this document was last updated
  }
);

export default mongoose.model("Member", memberSchema);
