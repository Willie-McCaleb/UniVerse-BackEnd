import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const eventsSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    shortDesc: {
      type: String,
      required: false,
    },
    school: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      //Not sure if this should be a Number
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zcode: {
      type: Number,
      required: true,
    },
    locationName: {
      type: String,
      required: false,
    },
    cat: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: false,
    },
    coverImg: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: false,
    },
    attend: {
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

export default mongoose.model("Events", eventsSchema);
