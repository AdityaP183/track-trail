import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedLayout } from "./components/app";
import { AddTask, Auth, Home } from "./pages";

export default function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <ProtectedLayout />,
			children: [
				{
					path: "",
					element: <Home />,
				},
				{
					path: "tasks",
					children: [
						{
							path: "add",
							element: <AddTask />,
						},
						{
							path: "pending",
							element: <AddTask />,
						},
						{
							path: "in-progress",
							element: <AddTask />,
						},
						{
							path: "completed",
							element: <AddTask />,
						},
					],
				},
			],
		},
		{
			path: "/auth",
			element: <Auth />,
		},
	]);

	return <RouterProvider router={router} />;
}
