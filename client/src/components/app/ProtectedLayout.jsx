import { Outlet } from "react-router-dom";
import { AddTask, Home } from "../../pages";
import { MainContent } from "../app";
import Sidebar from "./Sidebar";

export default function ProtectedLayout({ children }) {
	return (
		<div className="content flex">
			<Sidebar />
			<MainContent>
				<Outlet />
			</MainContent>
		</div>
	);
}
