import {Routes, Route} from 'react-router-dom';
import {LoginScreen} from "../pages/auth/Login.screen";
import {WelcomeLayout} from "../layouts/Welcome.layout";

const MainRoute = () => {
    return (
        <Routes>
            <Route path={'*'} element={<WelcomeLayout/>} />
        </Routes>
    );
};

export default MainRoute;
