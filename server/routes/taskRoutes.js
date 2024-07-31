import express from "express";
import {
	createTask,
	deleteTask,
	updateTask,
	getTasks,
} from "../controllers/taskController.js";
const router = express.Router();

router.route("/").post(createTask);

router.route("/:id").get(getTasks).patch(updateTask).delete(deleteTask);

export default router;
