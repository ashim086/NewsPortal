import { Router } from "express";
import { GetAllAdmins, GetAllJournalists, GetAllUsers, GetAllViewers } from "../controllers/AdminManagement.js";
import { AuthMiddleware } from "../middlewares/Authmiddleware.js";

const route = Router();

route.get('/viewers', AuthMiddleware, GetAllViewers);

route.get('/journalists', AuthMiddleware, GetAllJournalists);

route.get('/admins', AuthMiddleware, GetAllAdmins);

route.get('/Users', AuthMiddleware, GetAllUsers)

export default route;