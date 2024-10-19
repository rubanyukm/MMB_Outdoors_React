import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar.js";

export function Layout() {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </>
    );
}