import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { Body } from "./style";

export function DefaultLayout() {
    return (
        <Body>
            <Navbar />
            <Outlet />
            <Footer />
        </Body>
    );
}