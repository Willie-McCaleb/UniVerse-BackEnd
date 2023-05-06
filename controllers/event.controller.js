import Event from "../models/event.model.js";
import createError from "../utils/createError.js";

//to create events
export const createEvent = async (req, res, next) => {
  const newEvent = new Event({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    next(err);
  }
};

//to delete events
export const deleteEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);

    if (event.userId !== req.userId)
      return next(createError(403, "Not the owner of this event!"));

    await Event.findByIdAndDelete(req.params.id);
    res.status(200).send("Event Deleted!");
  } catch (err) {
    next(err);
  }
};

//to find one event
export const getEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) next(createError(404, "Event not found!"));
    res.status(200).send(event);
  } catch (err) {
    next(err);
  }
};

//to find and sort differnt events using J Query
export const getEvents = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat, $options: "i" }),
    ...(q.school && { school: q.school, $options: "i" }),
    ...(q.price && { price: q.price }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }), //options made lowercase the same as uppercase
  };
  try {
    const events = await Event.find(filters); //finding multiple data
    res.status(200).send(events);
  } catch (err) {
    next(err);
  }
};
