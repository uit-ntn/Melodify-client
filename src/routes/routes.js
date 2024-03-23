import { MainContainer } from "../Components/MainContainer";

const publicRoutes = [
    { path: "/", element: MainContainer },
    { path: "/signin", element: "" },
    { path: "/signup", element: "" },
    { path: "/search", element: "" },
    { path: "/search/:searching", element: "" },
    { path: "/catelogy/:catelogyID", element: "" },
    { path: "/", element: "" },
    { path: "/", element: "" },
    { path: "/", element: "" },
    { path: "/", element: "" },
    { path: "/", element: "" },
    { path: "/", element: "" },
    {}
]
const privateRoutes = [
    { path: "/", element: "" },
    { path: "/", element: "" },
    { path: "/", element: "" },
    { path: "/", element: "" },
    { path: "/", element: "" },
    { path: "/", element: "" },
    { path: "/", element: "" },
]
const adminRoutes = [
    { path: "/", element: "" },
    { path: "/", element: "" },
    { path: "/", element: "" },
    { path: "/", element: "" },
    { path: "/", element: "" },
    { path: "/", element: "" },
]


export {adminRoutes, publicRoutes,privateRoutes};