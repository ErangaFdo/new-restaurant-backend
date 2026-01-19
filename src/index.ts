import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRouter from "./routes/authRoutes"


dotenv.config()
const SERVER_PORT=process.env.SERVER_PORT
const MONGO_URL=process.env.MONGO_URL as string



const app = express()
app.use(express.json())

app.use("/api/v1/auth" , authRouter)

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("DB connected Successful")
  })
  .catch((err) => {
    console.error(`DB connection fail: ${err}`)
    process.exit(1)
  })

app.listen(SERVER_PORT,()=>{
    console.log("Server is Running 5000")
})

