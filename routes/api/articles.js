const router = require("express").Router();
const controller = require("../../controllers/controller");

// Find routes by books 
router.route("/")
  .get(controller.findAll)
  .post(controller.create);

// Find routes by id
router.route("/:id")
  .get(controller.findById)
  .delete(controller.remove);

module.exports = router;