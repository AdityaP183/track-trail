import mongoose from "mongoose";

const TaskSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
            trim: true,
		},
		description: {
			type: String,
			trim: true,
		},
		status: {
			type: String,
			enum: ["completed", "in-progress", "pending"],
			default: "pending",
		},
		priority: {
			type: String,
			enum: ["high", "low", "normal"],
			default: "normal",
		},
		dueDate: {
			type: Date,
		},
		tags: {
			type: [String],
		},
	},
	{ timestamps: true }
);

export default mongoose.model("Task", TaskSchema);
