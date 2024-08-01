import React, { useState } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import TaskBox from "../../components/app/TaskBox";
import { taskSample } from "../../utils/sampleData";
import { FaPlus, FaSortAmountDownAlt, FaSortAmountUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const [sortBy, setSortBy] = useState("created at");
	const [orderBy, setOrderBy] = useState("ascending");
	const navigate = useNavigate();

	return (
		<div className="w-full h-full pt-5">
			<div className="options h-[50px] mb-2">
				<div className="flex items-center justify-between mb-3">
					<h1 className="text-3xl font-semibold">All Tasks</h1>
					<div className="flex items-center gap-5">
						<div className="sortBy flex items-center gap-2">
							<h4 className="text-lg">Sort</h4>
							<Select
								onValueChange={(value) => setSortBy(value)}
								defaultValue={sortBy}
							>
								<SelectTrigger>
									<SelectValue placeholder="Select a verified email to display" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="created at">
										Created At
									</SelectItem>
									<SelectItem value="priority">
										Priority
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="sortBy flex items-center gap-2">
							<h4 className="text-lg">Order</h4>
							<Button
								variant="outline"
								onClick={() =>
									setOrderBy(
										orderBy === "ascending"
											? "desending"
											: "ascending"
									)
								}
							>
								{orderBy === "ascending" ? (
									<FaSortAmountDownAlt />
								) : (
									<FaSortAmountUp />
								)}
							</Button>
						</div>
					</div>
					<Button
						className="bg-red-700 text-slate-100 font-extrabold text-xl flex items-center gap-3 hover:bg-red-800"
						onClick={() => navigate("/tasks/add")}
					>
						<FaPlus />
						Add Task
					</Button>
				</div>
				<Separator />
			</div>
			<div
				className="tasks w-full grid grid-cols-5 gap-5 overflow-y-auto noScrollBar"
				style={{ height: "calc(100% - 50px)" }}
			>
				{taskSample.map((task) => (
					<TaskBox key={task.id.$oid} data={task} />
				))}
			</div>
		</div>
	);
}
