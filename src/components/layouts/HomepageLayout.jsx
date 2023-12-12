import { Outlet } from "react-router-dom";
import Navbar from "../utily/Navbar";
import Search from "../utily/Search";

const HomepageLayout = () => {
    return (
        <>
        <Navbar/>
        <Search/>
            <main className=''>
                <Outlet />
            </main>
        </>
    );
};

export default HomepageLayout;