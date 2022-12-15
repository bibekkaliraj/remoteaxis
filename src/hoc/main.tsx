import {BrowserRouter} from "react-router-dom";
import { NavBar } from "../pages/auth/NavBar";
import {BaseTheme} from "./theme";

export const MainContainer = (props: any) => {
    return (
        <BrowserRouter>
        <NavBar/>
            <BaseTheme>
                {props.children}
            </BaseTheme>
        </BrowserRouter>)
};