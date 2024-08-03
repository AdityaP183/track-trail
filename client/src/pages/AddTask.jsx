import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaCalendar } from "react-icons/fa";

export default function AddTask() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [status, setStatus] = useState("");
	const [priority, setPriority] = useState("");
	const [dueDate, setDueDate] = useState();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log({
			title: title,
			description: description,
			status: status,
			priority: priority,
			dueDate: dueDate,
		});
	};

	return (
		<div className="w-full flex items-center justify-center h-full">
			<Card className="w-1/2 h-[700px] py-4 px-2">
				<CardHeader className="flex-1">
					<CardTitle className="text-center text-2xl">
						Add a new task
					</CardTitle>
				</CardHeader>
				<CardContent className="flex-3 overflow-auto">
					<form
						onSubmit={handleFormSubmit}
						className="w-[80%] h-full overflow-auto mx-auto flex flex-col gap-3 py-5 px-3"
					>
						<div>
							<Label htmlFor="title">Title</Label>
							<Input
								id="title"
								name="title"
								placeholder="Enter a title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>

						<div>
							<Label htmlFor="description">Description</Label>
							<Textarea
								id="description"
								name="description"
								placeholder="Give a proper description"
								className="resize-none text-justify px-5"
								rows="5"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>

						<div>
							<h4 className="text-sm">Due date</h4>
							<Popover>
								<PopoverTrigger asChild>
									<Button
										variant={"outline"}
										className={cn(
											"w-[280px] justify-start text-left font-normal",
											!dueDate && "text-muted-foreground"
										)}
									>
										<FaCalendar className="mr-2 h-4 w-4" />
										{dueDate ? (
											format(dueDate, "MMMM do, yyyy")
										) : (
											<span>Pick a date</span>
										)}
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0">
									<Calendar
										mode="single"
										selected={dueDate}
										onSelect={setDueDate}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
						</div>

						<div>
							<h4>Status</h4>
							<Select
								className="focus:outline-none"
								onValueChange={(value) => setStatus(value)}
								defaultValue={status}
							>
								<SelectTrigger>
									<SelectValue placeholder="Select task status" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="completed">
										Completed
									</SelectItem>
									<SelectItem value="in-progress">
										In Progress
									</SelectItem>
									<SelectItem value="pending">
										Pending
									</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div>
							<h4>Priority</h4>
							<Select
								className="focus:outline-none"
								onValueChange={(value) => setPriority(value)}
								defaultValue={priority}
							>
								<SelectTrigger>
									<SelectValue placeholder="Select task priority" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="high">High</SelectItem>
									<SelectItem value="normal">
										Normal
									</SelectItem>
									<SelectItem value="low">Low</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<Button className="mt-10 font-extrabold" type="submit">
							Add Task
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
