const express = require('express')
const router = express.Router()

const home = require('./modules/home.js')
const urls = require('./modules/urls.js')
const urlShortener = require('./modules/urlShortener.js')

router.use('/', home)
router.use('/urls', urls)
router.use('/urlShortener.herokuapp.com', urlShortener)

module.exports = router
