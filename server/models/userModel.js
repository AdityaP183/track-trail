import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
			match: [/.+@.+\..+/, "Please enter a valid email address"],
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

UserSchema.methods.toJSON = function () {
	let obj = this.toObject();
	delete obj.password;
	return obj;
};

export default mongoose.model("User", UserSchema);
