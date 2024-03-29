"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const schemes_1 = require("../controllers/schemes");
const mentors_1 = require("../controllers/mentors");
const router = express_1.default.Router();
require('dotenv').config();
router.route("/schemes").get(schemes_1.schemes);
router.route("/mentor").post(mentors_1.mentorpost);
router.route("/mentor").get(mentors_1.mentorsget);
module.exports = router;
