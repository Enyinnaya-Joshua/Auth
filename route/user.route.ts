import { Router } from "express";
import {
  register,
  login,
  getUser,
  singleUser,
} from "../controller/user.controller";

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/getuser").get(getUser);
router.route("/getoneuser/:id").get(singleUser);

export default router;
