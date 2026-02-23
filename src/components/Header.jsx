import { Menu, ChevronDown, X, User, Search, ShoppingCart, KeyRound } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(true);
    const { openCart } = useCart();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const toggleShop = () => setIsShopOpen(!isShopOpen);

    return (
        <header className="flex flex-col items-center w-full relative z-50">
            {/* Desktop Header - Hidden on Mobile */}
            <div className="hidden lg:flex items-center justify-center w-full h-[56.1px] mt-[22px] mb-[22px]">
                <div className="flex items-center gap-[191px] max-w-[1254px] w-full px-4">
                    {/* Logo Section */}
                    <div className="shrink-0 flex items-center cursor-pointer">
                        <Link to="/">
                            <img src="/logo.png" alt="Modern Aminos" className="h-[56.1px] w-auto" />
                        </Link>
                    </div>

                    {/* Navigation and Icons Container */}
                    <div className="flex items-center justify-between flex-grow">
                        {/* Desktop Navigation */}
                        <nav className="flex items-center gap-[30px]">
                            <div className="relative flex items-center justify-center bg-[rgba(17,97,144,0.1)] rounded-full px-[14px] h-[32px] min-w-[76px] cursor-pointer">
                                <Link to="/" className="text-[#116190] text-[15px] font-semibold font-['Montserrat']">Home</Link>
                            </div>
                            <div className="text-[#08202c] text-[15px] font-medium font-['Montserrat'] flex items-center gap-1 cursor-pointer">
                                Shop <ChevronDown className="w-4 h-4" />
                            </div>
                            <div className="text-[#08202c] text-[15px] font-medium font-['Montserrat'] cursor-pointer">COA's</div>
                            <div className="text-[#08202c] text-[15px] font-medium font-['Montserrat'] cursor-pointer">FAQs</div>
                            <div className="text-[#08202c] text-[15px] font-medium font-['Montserrat'] cursor-pointer">Contact Us</div>
                        </nav>

                        {/* Desktop Icons */}
                        <div className="flex items-center gap-[24px]">
                            <div className="flex items-center gap-1 cursor-pointer text-[14px] font-semibold text-[#116190] font-['Montserrat']">
                                USA <ChevronDown className="w-4 h-4 text-[#116190]" />
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="relative cursor-pointer flex items-center group" onClick={openCart}>
                                    <ShoppingCart className="w-5 h-5 text-[#08202c] group-hover:text-[#116190] transition-colors" />
                                    <span className="absolute -top-[6px] -right-[8px] bg-[#C11010] text-white text-[9px] w-[14px] h-[14px] flex items-center justify-center rounded-full font-bold">
                                        3
                                    </span>
                                </div>
                                <User className="w-5 h-5 text-[#08202c] cursor-pointer hover:text-[#116190] transition-colors" />
                                <Search className="w-5 h-5 text-[#08202c] cursor-pointer hover:text-[#116190] transition-colors" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Header - Visible on Mobile */}
            <div className="lg:hidden flex items-center justify-between w-full px-4 h-[60px] bg-white border-b border-gray-100">
                <div className="flex items-center">
                    <Link to="/">
                        <img src="/logo.png" alt="Modern Aminos" className="h-[28px] w-auto" />
                    </Link>
                </div>
                <div className="flex items-center gap-[18px]">
                    <Search className="w-[18px] h-[18px] text-[#08202c]" />
                    <div className="relative cursor-pointer" onClick={openCart}>
                        <ShoppingCart className="w-[18px] h-[18px] text-[#08202c]" />
                        <span className="absolute -top-[4px] -right-[6px] bg-[#C11010] text-white text-[8px] w-[12px] h-[12px] flex items-center justify-center rounded-full font-bold">
                            3
                        </span>
                    </div>
                    <Menu className="w-[24px] h-[24px] text-[#116190] cursor-pointer" onClick={toggleMobileMenu} />
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={toggleMobileMenu}
                />
            )}

            {/* Mobile Sidebar Navigation */}
            <div className={`fixed top-0 left-0 h-full w-[300px] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto flex flex-col`}>

                {/* Sidebar Header */}
                <div className="flex items-center justify-between px-5 h-[60px] bg-[#116190] text-white shrink-0">
                    <span className="text-[16px] font-semibold font-['Montserrat']">Menu</span>
                    <X className="w-6 h-6 cursor-pointer opacity-80 hover:opacity-100" onClick={toggleMobileMenu} />
                </div>

                {/* Sidebar Content */}
                <div className="flex-1 overflow-y-auto">

                    {/* Main Nav Links */}
                    <div className="flex flex-col border-b border-gray-100">
                        <Link to="/" className="px-5 py-4 text-[#08202c] text-[15px] font-medium border-b border-gray-100 bg-white hover:bg-gray-50 flex items-center justify-between" onClick={toggleMobileMenu}>
                            Home
                        </Link>

                        {/* Collapsible Shop Menu */}
                        <div className="flex flex-col border-b border-gray-100">
                            <button
                                onClick={toggleShop}
                                className="w-full px-5 py-4 flex items-center justify-between text-[#08202c] text-[15px] font-medium bg-white hover:bg-gray-50"
                            >
                                Shop
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isShopOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Shop Submenu Dropdown */}
                            <div className={`flex flex-col bg-[#f5f7f9] overflow-hidden transition-all duration-300 ease-in-out ${isShopOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <Link to="/shop" className="px-5 py-3 text-[#08202c] text-[14px] hover:text-[#116190]" onClick={toggleMobileMenu}>All</Link>
                                <Link to="/shop/aminos" className="px-5 py-3 text-[#08202c] text-[14px] hover:text-[#116190]" onClick={toggleMobileMenu}>Aminos</Link>
                                <Link to="/shop/analytical-reagent" className="px-5 py-3 text-[#08202c] text-[14px] hover:text-[#116190]" onClick={toggleMobileMenu}>Analytical Reagent</Link>
                                <Link to="/shop/bac-water" className="px-5 py-3 text-[#08202c] text-[14px] hover:text-[#116190]" onClick={toggleMobileMenu}>Bac Water</Link>
                                <Link to="/shop/best-sellers" className="px-5 py-3 text-[#08202c] text-[14px] hover:text-[#116190]" onClick={toggleMobileMenu}>Best Sellers</Link>
                                <Link to="/shop/dissolvable-strips" className="px-5 py-3 text-[#08202c] text-[14px] hover:text-[#116190]" onClick={toggleMobileMenu}>Dissolvable Strips</Link>
                                <Link to="/shop/cognitive" className="px-5 py-3 text-[#08202c] text-[14px] hover:text-[#116190]" onClick={toggleMobileMenu}>Cognitive Compounds</Link>
                                <Link to="/shop/glp" className="px-5 py-3 text-[#08202c] text-[14px] pb-5 hover:text-[#116190]" onClick={toggleMobileMenu}>Glp's</Link>
                            </div>
                        </div>

                        <Link to="/coas" className="px-5 py-4 text-[#08202c] text-[15px] font-medium border-b border-gray-100 bg-white hover:bg-gray-50" onClick={toggleMobileMenu}>
                            COA's
                        </Link>
                        <Link to="/faq" className="px-5 py-4 text-[#08202c] text-[15px] font-medium border-b border-gray-100 bg-white hover:bg-gray-50" onClick={toggleMobileMenu}>
                            FAQ
                        </Link>
                        <Link to="/contact" className="px-5 py-4 text-[#08202c] text-[15px] font-medium border-b border-gray-100 bg-white hover:bg-gray-50" onClick={toggleMobileMenu}>
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Sidebar Footer Actions */}
                <div className="mt-auto shrink-0 bg-[#f5f7f9] p-5 flex flex-col gap-3">
                    <div className="flex items-center gap-2 cursor-pointer text-[14px] font-semibold text-[#116190] bg-white rounded-[8px] px-4 py-3 border border-gray-200 justify-center">
                        USA <ChevronDown className="w-4 h-4 text-[#116190]" />
                    </div>
                    <div className="flex items-center justify-between gap-3">
                        <Link to="/login" className="flex-1 flex items-center justify-center gap-2 text-[#08202c] bg-white rounded-[8px] px-4 py-3 border border-gray-200 text-[14px] font-medium" onClick={toggleMobileMenu}>
                            <User className="w-4 h-4" /> Account
                        </Link>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;
