import React, { useEffect, useState } from "react";
import {
	createBrowserRouter,
	Navigate,
	redirect,
	RouterProvider,
} from "react-router-dom";
import { ProtectedLayout } from "./components/app";
import { Auth } from "./pages";

export default function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <ProtectedLayout />,
		},
		{
			path: "/auth",
			element: <Auth />,
		},
	]);

	return <RouterProvider router={router} />;
}
