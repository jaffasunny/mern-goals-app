const express = require("express");
const router = express.Router();
const {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

// router.get("/", getGoals);

// router.post("/", setGoal);

// router.put("/:id", updategoal);

// router.delete("/:id", deleteGoal);

// Short hand way to write above stuff
router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

module.exports = router;
