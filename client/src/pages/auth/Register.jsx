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

export default function Register() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Register</CardTitle>
				<CardDescription>
					If already registered, then login
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-2">
				<div className="space-y-1">
					<Label htmlFor="username">Username</Label>
					<Input id="username" name="username" placeholder="John Doe" required/>
				</div>
				<div className="space-y-1">
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="email" name="email" placeholder="johndoe123@gmail.com"/>
				</div>
				<div className="space-y-1">
					<Label htmlFor="password1">Password</Label>
					<Input id="password1" type="password" name="password1" placeholder="test1234"/>
				</div>
				<div className="space-y-1">
					<Label htmlFor="password2">Confirm Password</Label>
					<Input id="password2" type="password" name="password2" placeholder="test1234"/>
				</div>
			</CardContent>
			<CardFooter>
				<Button variant="outline">Save password</Button>
			</CardFooter>
		</Card>
	);
}
