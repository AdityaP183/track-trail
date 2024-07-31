import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FaArrowRotateRight } from "react-icons/fa6";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [passwordError, setPasswordError] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();

		if (password.length < 6) {
			setPasswordError("Password must be at least 6 characters.");
			return;
		} else {
			setPasswordError("");
		}

		setLoading(true);

		try {
			const response = await axios.post(
				"http://localhost:8000/api/auth/login",
				{
					email,
					password,
				},
                {withCredentials: true}
			);
            console.log(response)
			if (response.status === 200) {
				navigate("/");
			}
		} catch (error) {
			console.error("Login failed:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Login</CardTitle>
				<CardDescription>
					If you have already made an account, login using your
					credentials
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-2">
				<form onSubmit={handleLogin}>
					<div className="space-y-1 my-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							name="email"
							required
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="space-y-1 my-2">
						<Label htmlFor="password">Password</Label>
						<Input
							id="password"
							type="password"
							name="password"
							placeholder="Enter password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						{passwordError !== "" && (
							<p className="ml-3 text-red-600 text-sm">
								{passwordError}
							</p>
						)}
					</div>
					{loading ? (
						<Button disabled className="mt-4">
							<FaArrowRotateRight className="mr-2 h-4 w-4 animate-spin" />
							Please wait
						</Button>
					) : (
						<Button variant="outline" className="mt-4">
							Save changes
						</Button>
					)}
				</form>
			</CardContent>
		</Card>
	);
}
