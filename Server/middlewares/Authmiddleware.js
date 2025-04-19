import jsonwebtoken from "jsonwebtoken"
import customError from "../util/customError.js";

export function AuthMiddleware(req, res, next) {

    const token = req.headers.authorization

    console.log(token)

    if (!token) {

        const err = new customError("Authentication error,token not found login again", 401);
        next(err);

    }
    
    else {

        const authHeader = token.split(" ")[1];

        jsonwebtoken.verify(token, process.env.PRIVATE_KEY, (err, decode) => {

            if (!err && decode) {

                req.head = decode;
                console.log(decode)

                next();
            }
            else {

                console.log(err)
            }
        })
    }
}