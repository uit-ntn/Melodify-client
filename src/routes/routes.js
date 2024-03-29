import MainContainer  from "../Components/MainContainer";
import SignIn from "../Components/Login-SignUp/SignIn";
import SignUp from "../Components/Login-SignUp/SignUp";


const publicRoutes = [
    { path: "/", element: MainContainer },
    { path: "/signin", element: SignIn },
    { path: "/signup", element: SignUp },
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
    { path: "/orders", element: "" },
    { path: "/report", element: "" },
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


export { adminRoutes, publicRoutes, privateRoutes };