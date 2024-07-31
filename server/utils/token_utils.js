import jwt from "jsonwebtoken";

export const createJWT = (payload) => {
	const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
	});
	return token;
};

export const verifyJWT = (payload) => {
	const decoded = jwt.verify(payload, process.env.ACCESS_TOKEN_SECRET);
	return decoded;
};
