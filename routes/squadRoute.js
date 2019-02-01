var express = require('express');
var router = express.Router();
var squad = require('../controllers/squadController')


router.route('/')
  .get(squad.list)
  .post(squad.create)

router.route('/:squad_id')
  .get(squad.detail)
  .put(squad.update)
  .delete(squad.delete)

router.route('/:squad_id/edit')
  .get(squad.update_get)

router.route('/:squad_id/delete')
  .get(squad.delete_get)

module.exports = router;