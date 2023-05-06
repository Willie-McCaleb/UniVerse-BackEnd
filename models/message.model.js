import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    conversationId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    //createdAt: a date representing when this document was created
    //updatedAt: a date representing when this document was last updated
  }
);

export default mongoose.model("Message", messageSchema);
