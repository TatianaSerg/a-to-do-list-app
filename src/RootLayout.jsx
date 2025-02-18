import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

function RootLayout() {
    const [tasks, setTasks] = useState([]);

    return (
        <>
            <MainNav />
            <main>
                <Outlet context={[tasks, setTasks]} />
            </main>
        </>
    );
}

export default RootLayout;

