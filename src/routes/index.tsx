import {Routes, Route} from 'react-router-dom';
import {LoginScreen} from "../pages/auth/Login.screen";

const MainRoute = () => {
    return (
        <Routes>
            <Route path={''} element={<LoginScreen/>} />
        </Routes>
    );
};

export default MainRoute;
