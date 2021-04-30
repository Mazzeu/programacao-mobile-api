const { Router } = require('express');
const establishmentController = require('../controller/establishmentController');
const router = Router();

//routes for creating and searching establishments 
router
  .get('/', establishmentController.allEstablishment)
  .get('/:id', establishmentController.oneEstablishement)
  .post('/create', establishmentController.createEstablishment)

module.exports = router;