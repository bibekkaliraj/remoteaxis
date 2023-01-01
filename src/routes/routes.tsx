import {Welcome} from "../pages/Landing/Welcome";
import {Contact} from "../pages/Landing/Contact";
import {CourseDetails} from "../pages/Landing/CourseDetails";
import {SearchCourses} from "../pages/Landing/SearchCourses";
import {CategoryCourses} from "../pages/Landing/CategoryCourses";

export const LandingRoutes = [
    {path:'', element: <Welcome/>},
    {path:'course/:course', element: <CourseDetails/>},
    {path:'search/:keyword', element: <SearchCourses/>},
    {path:'category/:category', element: <CategoryCourses/>},
    {path:'contact', element: <Contact/>},
];

export const DashboardRoutes=[

]