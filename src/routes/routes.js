import { MainContainer } from "../Components/MainContainer";
import { MenuPlaylist } from "../Components/MenuPlaylist";


const publicRoutes = [
    { path: "/", element: MainContainer },
    { path: "/", element: MenuPlaylist },
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