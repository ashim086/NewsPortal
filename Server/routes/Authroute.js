import { Router } from "express";
import { Registration, Signin } from "../controllers/Authorization.js";
import { validator } from "../middlewares/validatorMiddleware.js";
import { LoginSchemaValidator, SignupSchemaValidator } from "../validator/AuthorizationValidator.js";

const route = Router();

route.post("/register", validator(SignupSchemaValidator), Registration);

route.post("/signin", validator(LoginSchemaValidator), Signin);

export default route;
