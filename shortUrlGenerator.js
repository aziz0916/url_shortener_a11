function shortUrlGenerator() {
  const upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerLetter = upperLetter.toLowerCase()
  const number = '1234567890'

  let container = []

  container = container.concat(upperLetter.split(''))
  container = container.concat(lowerLetter.split(''))
  container = container.concat(number.split(''))

  let shortUrl = ''

  for (let i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * container.length)

    shortUrl += container[index]
  }
  return shortUrl
}

module.exports = shortUrlGenerator
