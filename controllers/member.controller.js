import createError from "../utils/createError.js";
import Member from "../models/member.model.js";
import Event from "../models/event.model.js";

//Create Member
export const createMember = async (req, res, next) => {
  const newMember = new Member({
    userId: req.userId,
    eventId: req.body.eventId,
  });
  try {
    const member = await Member.findOne({
      eventId: req.body.eventId,
      userId: req.userId,
    });

    if (member) return next(createError(403, "You are a member already!"));

    const savedMember = await newMember.save();

    await Event.findByIdAndUpdate(req.body.eventId, {
      $inc: { attend: 1 },
    });
    res.status(201).send(savedMember);
  } catch (err) {
    next(err);
  }
};

export const getMembers = async (req, res, next) => {
  try {
    const members = await Member.find({ eventId: req.params.eventId });
    res.status(200).send(members);
  } catch (err) {
    next(err);
  }
};
export const deleteMember = async (req, res, next) => {
  const delMember = delete Member({
    userId: req.userId,
    eventId: req.body.eventId,
  });
  try {
    const member = await Member.findOne({
      eventId: req.body.eventId,
      userId: req.userId,
    });

    await Event.findByIdAndDelete(req.body.eventId, {
      $inc: { attend: -1 },
    });

    res.status(200).send(deleteMember);
  } catch (err) {
    next(err);
  }
};
