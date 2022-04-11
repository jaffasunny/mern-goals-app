const express = require("express");
const router = express.Router();
const {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal,
} = require("../controllers/goalController");

// router.get("/", getGoals);

// router.post("/", setGoal);

// router.put("/:id", updategoal);

// router.delete("/:id", deleteGoal);

// Short hand way to write above stuff
router.route("/").get(getGoals).post(setGoal);
router.route("/:id").delete(deleteGoal).put(updateGoal);

module.exports = router;
