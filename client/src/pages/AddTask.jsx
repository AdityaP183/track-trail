import React, { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaCalendar } from "react-icons/fa";

export default function AddTask() {
	const [date, setDate] = useState();

	return (
		<div className="w-full flex items-center justify-center h-full">
			<Card className="w-2/5 h-[600px]">
				<CardTitle>Add a new task</CardTitle>
				<CardContent>
					<form>
						<Label htmlFor="title">Title</Label>
						<Input
							id="title"
							name="title"
							placeholder="Enter a title"
						/>

						<Label htmlFor="description">Description</Label>
						<Textarea
							id="description"
							name="description"
							placeholder="Give a proper description"
						/>

						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant={"outline"}
									className={cn(
										"w-[280px] justify-start text-left font-normal",
										!date && "text-muted-foreground"
									)}
								>
									<FaCalendar className="mr-2 h-4 w-4" />
									{date ? (
										"date set"
									) : (
										<span>Pick a date</span>
									)}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0">
								<Calendar
									mode="single"
									selected={date}
									onSelect={setDate}
									initialFocus
								/>
							</PopoverContent>
						</Popover>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
