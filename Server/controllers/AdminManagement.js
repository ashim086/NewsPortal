import { UserModel } from "../models/UserModel.js";

export function GetAllViewers(req, res) {
    UserModel.find({ role: "viewer" })
        .then((users) => {
            if (users.length > 0) {
                res.send({ message: "users registered", users })
            }
            else {
                res.send({ message: "no viewer available" })
            }
        })
        .catch((err) => {
            next(err);
        })
}

export function GetAllJournalists(req, res) {
    UserModel.find({ role: "journalist" })
        .then((users) => {
            if (users.length > 0) {
                res.send({ message: "users registered", users })
            }
            else {
                res.send({ message: "no journalist available" })
            }
        })
        .catch((err) => {
            res.send(err)
        })
}

export function GetAllAdmins(req, res) {
    UserModel.find({ role: "admin" })
        .then((users) => {
            if (users.length > 0) {
                res.send({ message: "users registered", users })
            }
            else {
                res.send({ message: "no admin available" })
            }
        })
        .catch((err) => {
            res.send(err)
        })
}

export function GetAllUsers(req, res) {
    UserModel.find()
        .then((users) => { res.send(users).status(200) })
        .catch((error) => { res.send({ error: error }).status(500) })
}