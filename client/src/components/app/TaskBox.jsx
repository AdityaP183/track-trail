import { MdAssignmentTurnedIn, MdAssignmentLate } from "react-icons/md";
import { FaHourglassHalf, FaCheck, FaExclamation } from "react-icons/fa";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { dateParaser } from "../../utils/dateParser";

export default function TaskBox({ data }) {
	const date = dateParaser("half", data.createdAt);
	return (
		<Card className="w-full h-[300px] flex flex-col overflow-hidden">
			<CardHeader>
				<CardTitle className="text-slate-200 text-justify">
					{data.title}
				</CardTitle>
			</CardHeader>
			<CardContent className="flex-1 overflow-hidden">
				<p className="text-sm text-gray-500 whitespace-wrap overflow-ellipsis text-justify">
					{data.description}
				</p>
			</CardContent>
			<CardFooter className="pt-2 pb-2 pl-5 flex gap-3">
				<Badge
					variant="outline"
					className={`
                        ${
							data.priority === "high"
								? "text-red-700 border-red-700"
								: data.priority === "low"
								? "text-sky-700 border-sky-700"
								: "text-green-600 border-green-600"
						}`}
				>
					{data.priority}
				</Badge>
				<Badge
					variant="outline"
					className="text-purple-500 border-purple-500"
				>
					{date}
				</Badge>
				<Badge
					variant="outline"
					className="text-base p-1 text-orange-700 border-orange-700"
				>
					{data.status === "pending" ? (
						<FaExclamation />
					) : data.status === "completed" ? (
						<FaCheck />
					) : (
						<FaHourglassHalf />
					)}
				</Badge>
			</CardFooter>
		</Card>
	);
}
