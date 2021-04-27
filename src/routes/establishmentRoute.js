const { Router } = require('express');
const establishmentController = require('../controller/establishmentController')
const router = Router();

router
  .get('/', establishmentController.allEstablishment);

module.exports = router;