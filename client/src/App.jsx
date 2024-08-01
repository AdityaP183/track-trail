import React, { useEffect, useState } from "react";
import {
	createBrowserRouter,
	Navigate,
	redirect,
	RouterProvider,
} from "react-router-dom";
import { ProtectedLayout } from "./components/app";
import { AddTask, Auth, Home } from "./pages";

export default function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <ProtectedLayout />,
			children: [
				{
					path: "home",
					element: <Home />,
				},
				{
					path: "tasks/add",
					element: <AddTask />,
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
