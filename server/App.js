const express = require('express')
const router = require('./routes/authRoute')
const connectDB = require('./connect')
const bodyParser = require('body-parser')
<<<<<<< HEAD
const cookieParser = require('cookie-parser')

=======
>>>>>>> 37076fba4d2c4d10a57b882420f49b6ef6713f1d
require('dotenv').config()
const app = express()


//middleware
app.use(bodyParser.json()); 
<<<<<<< HEAD
app.use(cookieParser());
app.use(express.urlencoded({
    extended:false
}))
=======
>>>>>>> 37076fba4d2c4d10a57b882420f49b6ef6713f1d
app.use('/',router)

// app.get('/',(req,res) => {
//     res.json('hello world')
// })

const port = 3000
const start = async() => {
    try {

        await connectDB(process.env.MONGO_URI)
        console.log('connected')
        app.listen(port,() => {
          console.log(`server is running on port ${port}`)  
        })
    } catch (error) {
        console.log(error)
    }
}

start()