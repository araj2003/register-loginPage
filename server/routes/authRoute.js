const express = require('express')
const { test,register} = require('../controllers/authControllers')
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

module.exports = router 