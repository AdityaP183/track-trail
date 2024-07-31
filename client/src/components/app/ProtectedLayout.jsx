import { Home } from "../../pages";
import { MainContent } from "../app";
import Sidebar from "./Sidebar";

export default function ProtectedLayout({ user }) {
	return (
		<div className="content flex">
			<Sidebar />
			<MainContent>
				<Home />
			</MainContent>
		</div>
	);
}
