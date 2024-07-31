import User from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utils/password_utils.js";
import { createJWT } from "../utils/token_utils.js";

export const registerUser = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		// Check if all required fields are present
		if (!username || !email || !password) {
			return res.status(400).json({
				message:
					"All required fields (username, email, and password) are necessary",
			});
		}

		// Check if the user already exists
		const existingUser = await User.findOne({ email: email });

		if (existingUser) {
			return res
				.status(409)
				.json({ message: "User with that email already exists" });
		}

		// Check if the password is more than 6 characters
		if (password.length < 6) {
			return res
				.status(400)
				.json({ message: "Password must be at least 6 characters" });
		}

		// Hashing the password and saving the user
		const securePassword = await hashPassword(password);
		req.body.password = securePassword;

		// Create a new user
		await User.create(req.body);
		return res.status(201).json({ message: "User created successfully" });
	} catch (error) {
		return res
			.status(500)
			.json({ error: "An internal server error occurred" });
	}
};

export const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		// Check if all required fields are present
		if (!email || !password) {
			return res.status(400).json({
				message:
					"All required fields (email, and password) are necessary",
			});
		}

		// Finding the user
		const user = await User.findOne({ email: email });

		if (!user) {
			return res
				.status(404)
				.json({ message: "User not registered with that email" });
		}

		// Checking password
		const isPasswordCorrect = await comparePassword(
			password,
			user.password
		);

		if (!isPasswordCorrect) {
			return res.status(401).json({
				message: "Password is incorrect. Please a valid password",
			});
		}

		// Adding the jwt token
		const token = createJWT({ userId: user._id });
		const twoDays = 1000 * 60 * 60 * 48;

		res.cookie(process.env.COOKIE_KEY, token, {
			httpOnly: true,
			expires: new Date(Date.now() + twoDays),
			secure: process.env.NODE_ENV === "production",
		});

		return res.status(200).json({ message: "User logged in successfully" });
	} catch (error) {
		return res
			.status(500)
			.json({ error: "An internal server error occurred" });
	}
};

export const logoutUser = (req, res) => {
    res.cookie(process.env.COOKIE_KEY, "logout", {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Strict', // Adjust based on your needs
      expires: new Date(Date.now()), // Expire the cookie immediately
    });
  
    res.status(200).json({ msg: "Logged out successfully" });
  };
  


