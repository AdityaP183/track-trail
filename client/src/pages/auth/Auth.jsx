import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./Login";
import Register from "./Register";

export default function Auth() {
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<Tabs defaultValue="login" className="w-[600px]">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="login">Login</TabsTrigger>
					<TabsTrigger value="register">Register</TabsTrigger>
				</TabsList>
				<TabsContent value="login">
					<Login/>
				</TabsContent>
				<TabsContent value="register">
					<Register/>
				</TabsContent>
			</Tabs>
		</div>
	);
}
