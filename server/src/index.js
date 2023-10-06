import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import {userRouter} from './routes/users.js'
import {reviewsRouter} from './routes/reviews.js'

const app = express();

app.use(express.json());
app.use(cors()); 
app.use("/auth", userRouter); 
app.use("/review", reviewsRouter); 


mongoose.connect("mongodb+srv://aaravurg:AggieworksTakeHome@songs.p2xxvvn.mongodb.net/songs?retryWrites=true&w=majority")

app.listen(3001, () => console.log("SERVER STARTEDDDD")); 