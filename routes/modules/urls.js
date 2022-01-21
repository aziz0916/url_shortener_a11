const express = require('express')

const Url = require('../../models/url.js')
const shortUrlGenerator = require('../../shortUrlGenerator.js')

const router = express.Router()

router.post('/', (req, res) => {
  const url = req.body.url.trim()
  let shortUrlArray = []

  // 取出資料庫內所有short_url，並放至shortUrlArray內
  Url.find()
    .then(items => {
      for (let i = 0; i < items.length; i++) {
        shortUrlArray = shortUrlArray.concat(items[i].short_url)
      }

      return Url.findOne({ url })
    })
    .then(item => {
      // 輸入新網址時，產生新的縮址
      if (!item) {
        let short_url = shortUrlGenerator()

        // 將新生成的short_url與shortUrlArray內short_url比對，目的是要生成唯一short_url
        while (shortUrlArray.includes(short_url)) {
          short_url = shortUrlGenerator()
        }

        return Url.create({ url, short_url })
          .then(() => {
            return Url.findOne({ url })
              .then(item => res.redirect(`/urls/${item._id}`))
              .catch(error => {
                console.log(error)
                res.render('errorPage', { status: 500, error: error.message })
              })
          })
      }
      // 輸入相同網址時，從資料庫找出縮址，並導向detail頁面
      res.redirect(`/urls/${item._id}`)
    })
    .catch(error => {
      console.log(error)
      res.render('errorPage', { status: 500, error: error.message })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id

  Url.findById(id)
    .lean()
    .then(item => {
      const keyword = `http://localhost:3000/urlShortener.herokuapp.com/${item.short_url}`

      res.render('detail', { keyword })
    })
    .catch(error => {
      console.log(error)
      res.render('errorPage', { status: 500, error: error.message })
    })
})

module.exports = router
