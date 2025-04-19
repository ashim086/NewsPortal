import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import DbConnection from "./config/DBConnect.js";
import Authroute from "./routes/Authroute.js"
import Adminroute from "./routes/Adminroute.js";
import { globalErrorHandler } from "./middlewares/globalErroHandler.js";
import JournalistRoute from "./routes/JournalistRoute.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 4041;

//routes
app.use("/api/auth",Authroute);
app.use("/api/admin", Adminroute)
app.use("/api/newsUpload",JournalistRoute)

// error handlers middleware
app.use(globalErrorHandler);


app.listen(PORT, () => {
    DbConnection()
    console.log(`Server running at PORT ${PORT}`)
})

