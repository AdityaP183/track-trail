import { verifyJWT } from "../utils/token_utils.js";

export const authenticateUser = (req, res, next) => {
	const COOKIE_KEY = process.env.COOKIE_KEY;
	const cookie_value = req.cookies[COOKIE_KEY];

	if (!cookie_value) {
		return res
			.status(401)
			.json({ message: "Not Authorized to access. Login or Register" });
	}

	try {
		const { userId } = verifyJWT(cookie_value);
        req.user = {userId};
		next();
	} catch (error) {
		return res
			.status(401)
			.json({ message: "Not Authorized to access. Login or Register" });
	}
};
