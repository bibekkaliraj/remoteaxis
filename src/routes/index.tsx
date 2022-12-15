import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { ForgotPassword } from '../pages/auth/ForgotPassword';
import {LoginScreen} from "../pages/auth/Login.screen";
import { NavBar } from '../pages/auth/NavBar';
import {SignupScreen} from "../pages/auth/Signup.screen";

const MainRoute = () => {
    return (
    
        <Routes>
            <Route path="/" element={<h1>Home</h1>}/>
            <Route path="/login" element={<LoginScreen/>} />
            <Route path="/signup" element={<SignupScreen/>} />
            <Route path="/forgotpassword" element={<ForgotPassword/>} />
            {/* <Route path="/forgotpassword" element={<ForgotPassword/>} /> */}
          
            
         </Routes>
        // <Routes>
        //     <Route path={''} element={<LoginScreen/>} />
        // </Routes>
    );
};

export default MainRoute;
