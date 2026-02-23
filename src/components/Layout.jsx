import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

const Layout = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="flex flex-col min-h-screen font-sans bg-gray-50/50 overflow-x-hidden relative">
            {/* Top Notification Bar */}
            <div className="bg-[#116190] text-white text-center text-[8px] md:text-[18px] h-[21px] md:h-[35px] flex items-center justify-center font-semibold font-['Montserrat']">
                For laboratory research use only. Not for human consumption.
            </div>
            <Header />
            <main className={`flex-grow flex flex-col items-center justify-start w-full ${isHome ? '' : 'pt-[40px] md:pt-[100px] pb-[40px] md:pb-[150px] px-4 sm:px-6 lg:px-8'}`}>
                <Outlet />
            </main>
            <Footer />
            <CartDrawer />
        </div>
    );
};

export default Layout;
