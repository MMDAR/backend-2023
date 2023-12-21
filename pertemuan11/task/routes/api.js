// Import Student Controller
const StudentController = require("../controllers/StudentController");
const StudentController = require("express");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Express");
});

router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

// Export router
module.exports = router;