import React from "react";
import {
	MdSpaceDashboard,
	MdAssignmentTurnedIn,
	MdAssignmentLate,
	MdSettings,
} from "react-icons/md";
import { FaPowerOff, FaHourglassHalf } from "react-icons/fa";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const sidebarLinks = [
	{
		id: "dashboard",
		label: "Dashboard",
		icon: <MdSpaceDashboard />,
		href: "/",
	},
	{
		id: "completed",
		label: "Completed",
		icon: <MdAssignmentTurnedIn />,
		href: "/completed",
	},
	{
		id: "in-progress",
		label: "In Progress",
		icon: <FaHourglassHalf />,
		href: "/in-progress",
	},
	{
		id: "pending",
		label: "Pending",
		icon: <MdAssignmentLate />,
		href: "/pending",
	},
	{
		id: "setting",
		label: "Settings",
		icon: <MdSettings />,
		href: "/settings",
	},
];

export default function Sidebar() {
	const location = useLocation();
	const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          // Make the POST request to the logout endpoint
          const response = await axios.post("http://localhost:8000/api/auth/logout", {}, { withCredentials: true });
          
          // Check if the response status is 200
          if (response.status === 200) {
            // Navigate to the login or home page
            navigate("/auth");
          }
        } catch (error) {
          // Log the error if the request fails
          console.log('Logout error:', error);
        }
      };

	return (
		<div className="sidebar relative w-[150px] h-screen flex items-center justify-center">
			<ul className="mainbar w-[55px] rounded-full bg-transparent border border-gray-500 flex flex-col items-center gap-10 py-5 px-2">
				{sidebarLinks.map((link) => (
					<li key={link.id} onClick={() => navigate(link.href)}>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<div
										className={`text-2xl allTransition text-gray-300 p-2 rounded-lg ${
											link.href === location.pathname
												? "bg-slate-700"
												: "hover:bg-slate-700"
										}`}
									>
										{link.icon}
									</div>
								</TooltipTrigger>
								<TooltipContent side="right">
									<h4 className="text-lg">{link.label}</h4>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</li>
				))}
				<li key="logout" onClick={handleLogout}>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<div
									className="text-2xl allTransition text-gray-300 p-2 rounded-lg bg-red-700 hover:bg-red-900"
								>
									<FaPowerOff />
								</div>
							</TooltipTrigger>
							<TooltipContent side="right">
								<h4 className="text-lg">Log Out</h4>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</li>
			</ul>
		</div>
	);
}
