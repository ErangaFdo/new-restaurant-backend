import { Router } from "express";
import { loggin, register } from "../controller/authController";

const router = Router()

router.post("/register" , register )
router.post("/loggin" , loggin)

export default router