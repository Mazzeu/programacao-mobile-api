const bodyParser = require('body-parser');

const establishment = require('./establishmentRoute');


module.exports = app => {
  app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    establishment
  )
}