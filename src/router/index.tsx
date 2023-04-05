import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

const Loading = lazy(() => import("@/views/exhibition/loading"));

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to="/loading" />
    },
    {
        path: "/loading/:keyword",
        element: <Loading />,

        children: [

        ]
    }
];

export default routes;