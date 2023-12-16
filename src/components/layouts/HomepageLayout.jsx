import { Outlet } from "react-router-dom";

const HomepageLayout = () => {
    return (
        <>
            <main className=''>
                <Outlet />
            </main>
        </>
    );
};

export default HomepageLayout;