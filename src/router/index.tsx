import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

const Loading = lazy(() => import("@/views/exhibition/loading"));
const NotFound = lazy(() => import("@/views/notfound/index"));

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to="/loading" />
    },
    {
        path: "/loading",
        element: <Loading />,
    },
    {
        path: "/loading/:keyword",
        element: <Loading />,
    }, {
        path: "*",
        element: <NotFound />
    }
];

export default routes;