import express from "express";
import { login, logout, register, updateProfile } from "../controllers/userController.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(isAuthenticated, login);

router.route("/logout").get(isAuthenticated, logout);

router.route("/profile/update").put(isAuthenticated, updateProfile);

export default router;