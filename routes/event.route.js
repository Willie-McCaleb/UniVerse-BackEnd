import express from "express";
import {
  createEvent,
  deleteEvent,
  getEvent,
  getEvents,
} from "../controllers/event.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createEvent);
router.delete("/:id", verifyToken, deleteEvent);
router.get("/single/:id", getEvent);
router.get("/", getEvents);

export default router;
