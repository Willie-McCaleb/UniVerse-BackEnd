import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const conversationSchema = new Schema(
  {
    // id: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    userId: {
      type: String,
      required: true,
    },
    // eventsId: {
    //   type: String,
    //   required: true,
    // },
    lastMessage: {
      type: String,
      required: false,
    },
    readByUser: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    //createdAt: a date representing when this document was created
    //updatedAt: a date representing when this document was last updated
  }
);

export default mongoose.model("Conversation", conversationSchema);
