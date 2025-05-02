import { Router } from "express";
import { GetAllAdmins, GetAllJournalists, GetAllUsers, GetAllViewers } from "../controllers/adminController.js";
import { AuthMiddleware } from "../middlewares/Authmiddleware.js";

const adminRoute = Router();

adminRoute.get('/viewers', AuthMiddleware(["admin"]), GetAllViewers);

adminRoute.get('/journalists', AuthMiddleware(["admin"]), GetAllJournalists);

adminRoute.get('/admins', AuthMiddleware(["admin"]), GetAllAdmins);

adminRoute.get('/Users', AuthMiddleware(["admin"]), GetAllUsers)

export default adminRoute;