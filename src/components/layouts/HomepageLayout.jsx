import { Outlet } from "react-router-dom";

const HomepageLayout = () => {
    return (
        <>
            <main className='container px-12 md:px-0 text-center'>
                <Outlet />
            </main>
        </>
    );
};

export default HomepageLayout;