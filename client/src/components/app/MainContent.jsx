import React from "react";
import Navbar from "./Navbar";

export default function MainContent({ children }) {
	return (
		<div
			className="main h-screen p-3"
			style={{ width: "calc(100% - 150px)" }}
		>
			<Navbar />
			<div
				className="main-content w-full"
				style={{ height: "calc(100% - 150px)" }}
			>
				{children}
			</div>
		</div>
	);
}
