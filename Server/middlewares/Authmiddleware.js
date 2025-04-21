import jsonwebtoken from "jsonwebtoken"
import customError from "../util/customError.js";

export function AuthMiddleware(req, res, next) {

    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")) {

        const err = new customError("Authentication error,token not found login again", 401);
        next(err);
        console.log(err)
    }

    else {

        const token = authHeader.split(" ")[1];

        jsonwebtoken.verify(token, process.env.PRIVATE_KEY, (err, decode) => {

            if (!err && decode) {

                req.head = decode;
                console.log(decode)

                next();
            }
            else {

                console.error("JWT Error:", err.message);
                return next(new customError("Invalid or expired token", 401));
            }
        })
    }
}