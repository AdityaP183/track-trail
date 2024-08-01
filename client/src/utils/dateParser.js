export const dateParaser = (type, userDate) => {
	const parsedDate = new Date(userDate);
	if (isNaN(parsedDate.getTime())) {
		throw new Error("Invalid date");
	}

	switch (type) {
		case "half":
			// Format: "Day Month Year"
			return `${parsedDate.getDate()} ${parsedDate.toLocaleString(
				"default",
				{ month: "short" }
			)} ${parsedDate.getFullYear()}`;
		case "full":
			// Format: "Day Month Year Hour:Minute:Second"
			return `${parsedDate.getDate()} ${parsedDate.toLocaleString(
				"default",
				{ month: "long" }
			)} ${parsedDate.getFullYear()} ${parsedDate.getHours()}:${String(
				parsedDate.getMinutes()
			).padStart(2, "0")}:${String(parsedDate.getSeconds()).padStart(
				2,
				"0"
			)}`;
		default:
			throw new Error("Unsupported format type");
	}
};
