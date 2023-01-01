import {NavLanding} from "../components/modules/landing/partials/Nav.landing";
import {Route, Routes} from "react-router-dom";
import {FooterLanding} from "../components/modules/landing/partials/Footer.landing";
import {LandingRoutes} from "../routes/routes";

export const WelcomeLayout =()=>{
    return <>
        <NavLanding/>
        <Routes>
            {LandingRoutes.map((route,key)=>(
                <Route path={route.path} element={route.element} />
                ))}
        </Routes>
        <FooterLanding/>
    </>
}