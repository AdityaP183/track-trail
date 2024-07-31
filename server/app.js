import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import express from "express";
import { config } from "dotenv";
const app = express();
config();

const corsOptions = {
	origin: "http://localhost:5173",
	methods: ["GET", "POST", "PUT", "DELETE"],
	credentials: true,
};

//* Routers
import authRouter from "./routes/authRoutes.js";
import taskRouter from "./routes/taskRoutes.js";
import userRouter from "./routes/userRoutes.js";

//* Middlewares
import { authenticateUser } from "./middlewares/authMiddleware.js";
app.use(express.json());
app.use(cors(corsOptions));
if (process.env.NODE_ENV === "production") {
	app.use(morgan("dev"));
}
app.use(cookieParser());

//* Routes
app.use("/api/auth", authRouter);
app.use("/api/users", authenticateUser, userRouter);
app.use("/api/tasks", authenticateUser, taskRouter);

//* Server configuration
const port = process.env.PORT || 8000;
try {
	await mongoose.connect(process.env.MONGODB_URL);
	console.log("Database connected");
	app.listen(port, () => {
		console.log("Server is running on port " + port);
	});
} catch (err) {
	console.log(err);
	process.exit(1);
}
