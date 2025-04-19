import { UserModel } from "../models/UserModel.js";
import jsonwebtoken from "jsonwebtoken"
import bcrypt from "bcrypt"

export async function Registration(req, res) {

    const { name, email, password, role } = req.body;

    const existinguser = await UserModel.findOne({ email: email });
   
    if (existinguser) {
        return res.status(401).send({ message: "User already exists" });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({ name, email, password: hashpassword, role })

    UserModel.create(newUser)
        .then(() => {
            res.status(200).send({ message: "User created successfully ", newUser })
        })
        .catch((err) => {
            res.status(500).send({ message: "internal server occured", err })
        })
}

export function Signin(req, res) {

    const { email, password } = req.body;

    UserModel.findOne({ email: email })
        .then((user) => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {

                    if (!err && result == true) {

                        jsonwebtoken.sign({ user: user }, process.env.PRIVATE_KEY, (err, token) => {
                            
                            if (!err && token) {
                                res.status(200).send({ message: "signin successfull", token })
                                // console.log(token)
                            }
                        })
                    }
                    else {
                        res.status(401).send({ message: "Please check email password" })
                    }
                }
                )
            } else (
                res.status(401).send({ message: "user not found please register" })
            )
        })
        .catch((err) => {
            console.log(err)
        })
}  