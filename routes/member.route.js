import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createMember,
  getMembers,
  deleteMember,
} from "../controllers/member.controller.js";

const router = express.Router();

router.post("/", verifyToken, createMember);
router.get("/:eventId", getMembers);
router.delete("/:eventId", deleteMember);

export default router;
