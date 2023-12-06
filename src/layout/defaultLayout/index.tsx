import { Outlet } from "react-router-dom";
import { Body } from "../components";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";

export function DefaultLayout() {
    return (
        <Body>
            <Navbar />
            <Outlet />
            <Footer />
        </Body>
    );
}