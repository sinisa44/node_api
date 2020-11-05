const express = require( 'express' );
const userController = require( './../controllers/userController' );
const router = express.Router();


router
  .route( '/' )
  .get(userController.index)
  .post(userController.create)

router
  .route('/:id')
  .get(userController.show)
  .patch(userController.update)
  .delete(userController.delete)


  module.exports = router;