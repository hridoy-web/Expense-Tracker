// database connection
import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from "./db/db";

dotenv.config();

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

connectDB()

app.get('/', (req, res) => {
    res.send('Expense Tracker Backend is Running and DB is Connected!')
})

app.listen(port, () => {
    console.log(`server is runing at port ${port}`)
})