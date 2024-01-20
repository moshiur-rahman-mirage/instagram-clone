import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";
import HomePage from "../pages/HomePage/HomePage";
import Root from "../Layouts/RootLayout/Root";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: 'home',
                element:<HomePage/>
            }, 
            {
                path:'/',
                element:<AuthPage/>
            },
            {
                path:':username',
                element:<ProfilePage/>
            }
           
            
        ]
    }    
]);

export default router;