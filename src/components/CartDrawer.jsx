import { X, Minus, Plus, ChevronDown, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const mockCartItems = [
    {
        id: 1,
        name: 'Cagrilintide 10MG',
        price: 134.00,
        quantity: 1,
        image: '/assets/product_demo_1.png',
        isInsurance: false,
    },
    {
        id: 2,
        name: 'Premium shipping insurance',
        price: 4.99,
        quantity: 1,
        image: '/assets/product_demo_1.png', // Or a box icon if we had one
        isInsurance: true,
    },
    {
        id: 3,
        name: 'IGF-1 LR3 1MG',
        price: 68.00,
        quantity: 1,
        image: '/assets/product_demo_1.png',
        isInsurance: false,
    }
];

const CartDrawer = () => {
    const { isCartOpen, closeCart } = useCart();

    return (
        <>
            {/* Overlay */}
            {isCartOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 transition-opacity"
                    onClick={closeCart}
                />
            )}

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-[60] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 shrink-0">
                    <h2 className="text-[#08202c] font-semibold text-[17px] font-['Poppins']">
                        Review Your Cart (3)
                    </h2>
                    <X
                        className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors"
                        onClick={closeCart}
                        strokeWidth={1.5}
                    />
                </div>

                {/* Body / Items */}
                <div className="flex-1 overflow-y-auto px-6 py-6">
                    <div className="flex flex-col gap-6">
                        {mockCartItems.map((item) => (
                            <div key={item.id} className="flex gap-4">
                                {/* Image Container */}
                                <div className="relative shrink-0">
                                    <div className="w-[72px] h-[72px] bg-[#f5f7f9] rounded-[10px] flex items-center justify-center p-2">
                                        {/* Since I don't have the exact box icon, I'll use the product image or conditionally render */}
                                        <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                    </div>
                                    {/* Remove Item Button */}
                                    <button className="absolute -top-2 -left-2 bg-gray-200 text-gray-500 rounded-full w-[18px] h-[18px] flex items-center justify-center hover:bg-gray-300 transition-colors">
                                        <X className="w-3 h-3" />
                                    </button>
                                </div>

                                {/* Item Details */}
                                <div className="flex-1 flex flex-col justify-between py-0.5">
                                    <div className="flex justify-between items-start gap-2">
                                        <div>
                                            <h3 className="text-[#08202c] font-semibold text-[14px] font-['Poppins'] leading-tight">
                                                {item.name}
                                            </h3>
                                            {item.isInsurance && (
                                                <div className="flex items-center gap-1 mt-1.5">
                                                    <span className="text-gray-500 text-[12px]">Offer:</span>
                                                    <span className="bg-[#00b67a] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                                        Product
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <span className="text-[#08202c] font-medium text-[15px] shrink-0">
                                            ${item.price.toFixed(2)}
                                        </span>
                                    </div>

                                    {/* Quantity Selector - Disabled for insurance based on mockup (optional) */}
                                    {!item.isInsurance ? (
                                        <div className="flex items-center border border-gray-200 rounded-[6px] w-[85px] h-[32px] mt-3">
                                            <button className="w-[28px] h-full flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors">
                                                <Minus className="w-3.5 h-3.5" />
                                            </button>
                                            <div className="flex-1 flex items-center justify-center text-[13px] font-medium text-[#116190]">
                                                {item.quantity}
                                            </div>
                                            <button className="w-[28px] h-full flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors">
                                                <Plus className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="h-[32px] mt-3"></div> // spacer
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer / Summary */}
                <div className="border-t border-gray-200 bg-white shrink-0">
                    <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors">
                        <span className="text-[#08202c] font-medium text-[14px]">Got a discount code?</span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>

                    <div className="px-6 py-5">
                        <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[#08202c] font-semibold text-[16px]">Subtotal</span>
                            <span className="text-[#08202c] font-bold text-[18px]">$206.99</span>
                        </div>
                        <p className="text-gray-500 text-[12px] mb-5">
                            Shipping & taxes may be re-calculated at checkout
                        </p>

                        <button className="w-full bg-[#022c4d] hover:bg-[#001c36] text-white h-[50px] rounded-[8px] flex items-center justify-center gap-2 font-semibold text-[16px] transition-colors">
                            <ShoppingCart className="w-5 h-5" />
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;
