const express = require('express')
<<<<<<< HEAD
const { test,register, login, profile} = require('../controllers/authControllers')
=======
const { test,register} = require('../controllers/authControllers')
>>>>>>> 37076fba4d2c4d10a57b882420f49b6ef6713f1d
const router = express.Router()
const cors = require('cors')

//middleware
router.use(
    cors({
        credentials:true,
        origin:'http://localhost:5173'
    })
)


router.get('/',test)
router.post('/register',register)
<<<<<<< HEAD
router.post('/login',login)
router.get('/profile',profile)
=======
>>>>>>> 37076fba4d2c4d10a57b882420f49b6ef6713f1d

module.exports = router 