import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import DbConnection from "./config/DBConnect.js";
import userRoute from "./routes/userRoute.js"
import { globalErrorHandler } from "./middlewares/globalErroHandler.js";
import newsRoute from "./routes/newsRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import adminRoute from "./routes/AdminRoute.js";
import helmet from 'helmet'
dotenv.config();

const app = express();

app.use(cors())
app.use(helmet())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static());

const PORT = process.env.PORT || 4041;

//routes
app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute)
app.use("/api/news", newsRoute)
app.use("/api/category", categoryRoute)


app.listen(PORT, () => {
    DbConnection()
    console.log(`Server running at PORT ${PORT}`)
})


// error handlers middleware
app.use(globalErrorHandler);
