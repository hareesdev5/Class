import express from 'express'
const app = express()
import cors from 'cors'

import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT

import appRouter from './routes/index.js'

app.use(cors())

app.use(express.json())

app.use(express.json())
app.use('/',appRouter)


app.listen(PORT,()=>console.log(`Server listening Port ${PORT}`))