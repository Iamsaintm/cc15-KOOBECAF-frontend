import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";
import SideNavCreate from "./SideNavCreate";

function Layout() {
    const { pathname } = useLocation();
    return (
        <>
            {pathname === "/create" ? (
                <div className="flex flex-col h-full w-full">
                    <div className="fixed w-[360px] top-0 bg-dark-night h-16 z-10">
                        <Header />
                    </div>
                    <div className="flex w-full">
                        <div className="fixed top-0 pt-12 bg-second-light min-w-[360px]">
                            <SideNavCreate />
                        </div>
                        <div className="w-full">
                            <Outlet />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col h-full w-full">
                    <div className="fixed w-full top-0 bg-dark-night h-16 z-10">
                        <Header />
                    </div>
                    <div className="flex w-full">
                        <div className="fixed top-0 pt-12 bg-second-light min-w-[360px]">
                            <SideNav />
                        </div>
                        <div className="w-full">
                        
                            <Outlet />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Layout;
