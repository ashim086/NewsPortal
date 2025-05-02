import { Router } from "express";
import { login, registration } from "../controllers/userContorller.js";
import { validator } from "../middlewares/validatorMiddleware.js";
import { LoginSchemaValidator, SignupSchemaValidator } from "../validator/AuthorizationValidator.js";
import { AuthMiddleware } from "../middlewares/Authmiddleware.js";

const userRoute = Router();

userRoute.post("/register", validator(SignupSchemaValidator), registration);

userRoute.post("/signin", validator(LoginSchemaValidator), login);

//secured authenticated route
userRoute.get("/profile", validator(LoginSchemaValidator), AuthMiddleware(["viewer", "journalist", "admin"]), login);
userRoute.patch("/updateProfile", validator(LoginSchemaValidator), AuthMiddleware(["viewer", "journalist", "admin"]), login);
userRoute.delete("/delete", validator(LoginSchemaValidator), AuthMiddleware(["viewer", "journalist", "admin"]), login);

export default userRoute;