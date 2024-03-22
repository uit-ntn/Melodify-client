import { LeftMenu } from "../Components/LeftMenu";
import { MainContainer } from "../Components/MainContainer";
import { RightMenu } from "../Components/RightMenu";
import { PlayList } from "../Components/PlayList";



const publicRoutes = [
    { path: "/", element: LeftMenu },
    { path: "/", element: MainContainer },
    { path: "/", element: RightMenu },
    { path: "/", element: "" },
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