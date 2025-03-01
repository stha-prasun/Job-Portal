import express from "express";
import { login, register, updateProfile } from "../controllers/userController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(login, isAuthenticated);

router.route("/profile/update").post(updateProfile, isAuthenticated);

export default router;