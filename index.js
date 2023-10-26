const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT

const appRouter = require('./routes/index')

app.use(express.json())

app.use(express.json())
app.use('/',appRouter)


app.listen(PORT,()=>console.log(`Server listening Port ${PORT}`))