import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const followersSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    conversationId: {
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

export default mongoose.model("Followers", followersSchema);
