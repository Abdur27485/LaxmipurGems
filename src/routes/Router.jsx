import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import AllJewellery from "../pages/All jewellery/AllJewellery";
import AddJewellery from "../pages/Add Jewellery/AddJewellery";
import Blogs from "../pages/Blogs/Blogs";
import MyJewellery from "../pages/My Jewellery/MyJewellery";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/allJewellery',
                element: <AllJewellery></AllJewellery>
            },
            {
                path: '/myJewellery',
                element: <MyJewellery></MyJewellery>
            },
            {
                path: '/addJewellery',
                element: <AddJewellery></AddJewellery>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])

export default router;