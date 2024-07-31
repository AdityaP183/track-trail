import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaSearch } from "react-icons/fa";

const taskStatus = [
	{ id: "all", name: "Total Tasks", bg: "bg-gray-500/20" },
	{ id: "completed", name: "Completed", bg: "bg-emerald-500/20" },
	{ id: "in-progress", name: "In Progress", bg: "bg-orange-500/20" },
	{ id: "pending", name: "Pending", bg: "bg-rose-500/20" },
];

export default function Navbar() {
	return (
		<Card className="w-full h-[150px]">
			<CardContent className="flex h-full p-4 gap-10">
				<div className="flex-1 flex flex-col justify-between">
					<h1 className="text-2xl font-extrabold opacity-80 ml-2">
						Task Trail
					</h1>
					<div className="flex items-center space-x-2">
						<Input
							placeholder="Search tasks..."
							className="flex-1"
						/>
						<Button
							type="submit"
							className="p-2 w-[50px] opacity-90"
						>
							<FaSearch />
						</Button>
					</div>
				</div>
				<div className="overview-stats flex-1 px-5 grid grid-cols-4 gap-5">
					{taskStatus.map((status) => (
						<Card
							key={status.id}
							className={`w-full h-full flex flex-col justify-center ${status.bg}`}
						>
							<CardContent className="px-6 py-0">
								<h4 className="text-sm font-medium">
									{status.name}
								</h4>
								<h1 className="text-3xl font-bold">1020</h1>
							</CardContent>
						</Card>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
