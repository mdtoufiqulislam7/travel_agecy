const umracontrollars = require('../controlars/umradata')
const express = require('express')
const router = express.Router()




router.post('/umrainfo',umracontrollars.umradata)
router.get('/getumrahpackeg',umracontrollars.umrahdataget)



module.exports = router