import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";
import HomePage from "../pages/HomePage/HomePage";
import Root from "../Layouts/RootLayout/Root";
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
            }
           
            
        ]
    }    
]);

export default router;