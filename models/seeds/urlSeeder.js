const db = require('../../config/mongoose.js')
const Url = require('../../models/url.js')

db.once('open', () => {
  Url.create({ url: 'http://123.com.tw', short_url: '12345' })
    .then(() => {
      console.log('done.')
      db.close()
    })
    .catch(error => console.log(error))
    .finally(() => process.exit())
})
