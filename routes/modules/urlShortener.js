const express = require('express')

const Url = require('../../models/url.js')

const router = express.Router()

router.get('/:short_url', (req, res) => {
  const short_url = req.params.short_url

  return Url.findOne({ short_url })
    .then(item => res.redirect(`${item.url}`))
    .catch(error => {
      console.log(error)
      res.render('errorPage', { status: 500, error: error.message })
    })
})

module.exports = router
