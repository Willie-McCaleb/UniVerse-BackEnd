import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const savedEventsSchema = new Schema(
  {
    eventsId: {
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

export default mongoose.model("SavedEvents", savedEventsSchema);
