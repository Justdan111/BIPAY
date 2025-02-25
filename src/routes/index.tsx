import { createBrowserRouter, RouteObject } from 'react-router-dom';
import HomePage from '../pages/homePage';
import SignupPage from '../pages/signupPage';
import OTPPage from '../pages/verifyOTP';


export type Roles = "admin" | "hr" | "employee";
export type RouteWithMeta = RouteObject & {
    roles?: Roles[];
    path: string;
    children?: RouteWithMeta[];
    title?: string;
    wrapper?: string;
  }
  

  const routes: RouteWithMeta[] = [
    {
      path: '/',
      element: <HomePage/>,
      title: "Home Page",
      wrapper: "public",
    },
    {
      path: '/login',
      element: <></>,
      title: "Login Page",
      wrapper: "public",
    },
    {
      path: '/signup',
      element: <SignupPage/>,
      title: "Signup Page",
      wrapper: "public",
    },
    {
        path: '/otp',
        element: <OTPPage/>,
        title: "Signup Page",
        wrapper: "public",
      },
   
    {
      path: '*',
      element: <div>404 - Page Not Found</div>
    },
  
  
  
  ];
  
  const router = createBrowserRouter(routes);
  
  export default router;