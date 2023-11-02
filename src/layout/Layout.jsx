import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";
import SideNavCreate from "./SideNavCreate";
import SideNavItemCreate from "./SideNavItemCreate";
import SideNavCategory from "./SideNavCategory";

function Layout() {
    const { pathname } = useLocation();

    let sideNav = (
        <div className="flex flex-col h-full w-full">
            <div className="fixed w-full top-0 bg-dark-night h-16 z-10">
                <Header />
            </div>
            <div className="flex w-full">
                <div className="fixed top-0 pt-12 bg-second-light min-w-[360px]">
                    <SideNav />
                </div>
                <div className="w-full">
                    <div className="h-16"></div>
                    <Outlet />
                </div>
            </div>
        </div>
    );

    if (pathname === "/create") {
        sideNav = (
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
        );
    }

    if (pathname === "/create/item") {
        sideNav = (
            <div className="flex flex-col h-full w-full">
                <div className="fixed w-[360px] top-0 bg-dark-night h-16 z-10">
                    <Header />
                </div>
                <div className="flex w-full">
                    <div className="fixed top-0 pt-12 bg-second-light min-w-[360px]">
                        <SideNavItemCreate />
                    </div>
                    <div className="w-full">
                        <Outlet />
                    </div>
                </div>
            </div>
        );
    }

    if (pathname.startsWith("/category/")) {
        sideNav = (
            <div className="flex flex-col h-full w-full">
                <div className="fixed w-full top-0 bg-dark-night h-16 z-10">
                    <Header />
                </div>
                <div className="flex w-full">
                    <div className="fixed top-0 pt-12 bg-second-light min-w-[360px]">
                        <SideNavCategory />
                    </div>
                    <div className="w-full">
                        <Outlet />
                    </div>
                </div>
            </div>
        );
    }

    return <>{sideNav}</>;
}

export default Layout;
