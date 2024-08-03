import TaskBox from "./TaskBox";

export default function TaskList({ taskData }) {
	return (
		<div
			className="tasks w-full grid grid-cols-5 gap-5 overflow-y-auto noScrollBar"
			style={{ height: "calc(100% - 50px)" }}
		>
			{taskData.map((task) => (
				<TaskBox key={task.id.$oid} data={task} />
			))}
		</div>
	);
}
