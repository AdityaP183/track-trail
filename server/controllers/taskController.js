import Task from "../models/taskModel.js";

export const createTask = async (req, res) => {
	try {
		const { title } = req.body;

		if (!title) {
			return res.status(400).json({ message: "Title not specified" });
		}

		await Task.create(req.body);

		res.status(201).json({ message: "Task created successfully" });
	} catch (error) {
		return res
			.status(500)
			.json({ error: "An internal server error occurred" });
	}
};

export const getTasks = (req, res) => {};

export const updateTask = (req, res) => {};

export const deleteTask = (req, res) => {};
