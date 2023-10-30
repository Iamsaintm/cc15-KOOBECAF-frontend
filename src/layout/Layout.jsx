import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";

function Layout() {
    return (
        <>
            <div className="flex flex-col h-full w-full bg-red-50">
                <div className="fixed w-full top-0 bg-red-200 h-12 z-10">
                    <Header />
                </div>
                <div className="flex w-full">
                    <div className="fixed top-0 pt-12 bg-green-200 min-w-[300px]">
                        <SideNav />
                    </div>
                    <div className="bg-blue-200 w-full">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;
