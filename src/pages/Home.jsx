import { ArrowRight, Star, ShieldCheck, Truck, ChevronDown, ChevronRight, ChevronLeft, MessageCircle, FlaskConical, Lock, Package, CheckCircle, ShoppingCart, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

// Dummy Data
const categories = [
    { title: 'Aminos', products: 18, icon: '/assets/category_aminos.svg' },
    { title: 'Peptides', products: 24, icon: '/assets/category_peptides.svg' },
    { title: 'Powders', products: 32, icon: '/assets/category_powders.svg' },
    { title: 'Cognitive', products: 15, icon: '/assets/category_cognitive.svg' },
    { title: 'SARMs', products: 12, icon: '/assets/category_sarms.svg' },
    { title: 'Bundles', products: 8, icon: '/assets/category_bundles.svg' },
];

const bestSellingProducts = [
    { name: 'GLP', price: '$134.00', originalPrice: '$144.00', image: '/assets/product_demo_1.png' },
    { name: 'L-Carnitine (20ML)', price: '$48.00', image: '/assets/product_demo_1.png' },
    { name: 'Melanotan 2 10MG', price: '$38.00', image: '/assets/product_demo_1.png' },
    { name: 'Methylene Blue', price: '$34.00 – $54.00', image: '/assets/product_demo_1.png' },
];

const newArrivals = [
    { name: 'GLP', price: '$144.00', image: '/assets/product_demo_1.png' },
    { name: 'L-Carnitine (20ML)', price: '$48.00', image: '/assets/product_demo_1.png' },
    { name: 'Melanotan 2 10MG', price: '$38.00', image: '/assets/product_demo_1.png' },
    { name: 'Methylene Blue', price: '$34.00 – $54.00', image: '/assets/product_demo_1.png' },
];

const comingSoonProducts = [
    { name: 'GLP', price: '$144.00', image: '/assets/product_demo_1.png' },
    { name: 'L-Carnitine (20ML)', price: '$48.00', image: '/assets/product_demo_1.png' },
    { name: 'Melanotan 2 10MG', price: '$38.00', image: '/assets/product_demo_1.png' },
    { name: 'Methylene Blue', price: '$34.00 – $54.00', image: '/assets/product_demo_1.png' },
];

const highlightProducts = [
    { name: 'GLP', price: '$144.00', image: '/assets/product_demo_1.png' },
    { name: 'L-Carnitine (20ML)', price: '$48.00', image: '/assets/product_demo_1.png' },
    { name: 'Melanotan 2 10MG', price: '$38.00', image: '/assets/product_demo_1.png' },
    { name: 'Methylene Blue', price: '$34.00 – $54.00', image: '/assets/product_demo_1.png' },
];

const testimonials = [
    {
        quote: "Switched from our previous vendor after purity issues. Modern Aminos COAs have matched our independent testing every single time. The consistency is unmatched.",
        name: "Dr. Michael Chen",
        role: "Research Lab Director",
        initials: "DM"
    },
    {
        quote: "Same-day shipping is a game changer for our clinic supply chain. We order Monday morning and have product by Wednesday. Lot traceability makes compliance easy.",
        name: "S. Kim",
        role: "Operations Manager",
        initials: "SK"
    },
    {
        quote: "The HPLC certificates give us full confidence in what we're working with. Customer support actually understands the science. Rare in this space.",
        name: "M. Torres",
        role: "Biochemistry Researcher",
        initials: "MT"
    }
];

const faqs = [
    { q: "How long do orders take to ship?", a: "We typically aim to ship orders within 1-2 business days. Please note that we do not ship on weekends. During high-volume sales periods, such as big promotional events, shipping times may extend slightly by an additional day or two." },
    { q: "Do you ship internationally or only in the US?", a: "Currently, we offer shipping within the United States. Please check back as we are always expanding our delivery networks." },
    { q: "What Payment Methods Do You Accept?", a: "We accept all major credit cards, as well as select secure online payment providers. All transactions are securely encrypted." },
    { q: "Why are your products labeled \"Not for Human Consumption\"?", a: "Our products are strictly intended for laboratory research use only. They are not approved by the FDA for human or animal consumption." }
];

const ProductCard = ({ product, isFilled = false }) => {
    const { openCart } = useCart();
    return (
        <div className="bg-white rounded-[15px] border border-gray-200 p-4 flex flex-col items-center group relative overflow-hidden transition-all hover:shadow-lg hover:border-[#116190]/30">
            <div className="w-full aspect-square bg-gradient-to-b from-[#e8eef2] to-[#d9e3ea] rounded-[10px] mb-4 relative flex items-center justify-center overflow-hidden">
                <img src={product.image} className="w-[75%] h-auto object-contain" alt={product.name} onError={(e) => { e.target.src = 'https://placehold.co/200x200/e8eef2/116190?text=Product'; }} />
            </div>
            <h3 className="text-[#116190] font-semibold text-[15px] text-center mb-2 font-['Poppins'] leading-tight">{product.name}</h3>
            <div className="flex items-center gap-2 mb-4">
                <span className="text-[#08202c] font-bold text-[15px]">{product.price}</span>
                {product.originalPrice && (
                    <span className="text-gray-400 text-[13px] line-through">{product.originalPrice}</span>
                )}
            </div>
            <button onClick={openCart} className={`w-full h-[40px] rounded-full font-medium text-[13px] font-['Poppins'] transition-colors flex items-center justify-center gap-2 ${isFilled ? 'bg-[#116190] text-white hover:bg-[#0c4a6e]' : 'border border-[#116190] text-[#116190] hover:bg-[#116190] hover:text-white'}`}>
                <img src="/assets/add_to_cart.svg" alt="Add to cart" className={`w-4 h-4 ${isFilled ? 'brightness-0 invert' : ''}`} />
                Add To Cart
            </button>
        </div>
    );
};

const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white rounded-[16px] border border-gray-100 p-7 flex flex-col h-full shadow-sm">
        <div className="flex items-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-[16px] h-[16px] fill-[#d4a843] text-[#d4a843]" />
            ))}
        </div>
        <p className="text-gray-500 text-[15px] leading-[1.9] font-['Poppins'] italic flex-grow mb-8 font-light">
            "{testimonial.quote}"
        </p>
        <div className="flex items-center gap-4 mt-auto">
            <div className="w-[50px] h-[50px] rounded-full bg-[#e0f0f5] flex items-center justify-center text-[#116190] font-bold text-[16px]">
                {testimonial.initials}
            </div>
            <div>
                <p className="text-[#08202c] font-semibold text-[15px]">{testimonial.name}</p>
                <p className="text-gray-400 text-[13px]">{testimonial.role}</p>
            </div>
        </div>
    </div>
);

const CategoryCard = ({ category }) => (
    <div className="bg-white rounded-[15px] border border-gray-100 shadow-[0px_1px_11px_3px_rgba(178,178,178,0.25)] p-6 flex flex-col items-center justify-center hover:shadow-[0px_8px_25px_rgba(17,97,144,0.12)] hover:border-[#116190]/20 transition-all cursor-pointer h-[191px] group/card">
        <div className="w-[100px] h-[100px] rounded-[12px] bg-[#f5f7f9] flex items-center justify-center mb-3 group-hover/card:scale-105 transition-transform">
            <img src={category.icon} alt={category.title} className="w-[58px] h-[58px] object-contain" onError={(e) => { e.target.src = `https://placehold.co/58x58/116190/ffffff?text=${category.title.charAt(0)}`; }} />
        </div>
        <h3 className="text-[#08202c] font-semibold text-[15px] mb-0.5 font-['Poppins']">{category.title}</h3>
        <span className="text-gray-400 text-[12px]">{category.products} products</span>
    </div>
);

const Home = () => {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <div className="w-full flex flex-col items-center bg-[#F9FAFB] min-h-screen">

            {/* HERO SECTION */}
            <section className="w-full bg-gradient-to-l from-[#003862] to-[#00203e] flex justify-center py-16 md:py-20">
                <div className="max-w-[1347px] w-full px-4 sm:px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-[24px] items-center">
                    <div className="flex flex-col text-white gap-[20px]">
                        <div className="flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 w-max">
                            <Star className="w-[18px] h-[18px] fill-[#d4a843] text-[#d4a843]" />
                            <span className="text-[15px] font-medium font-['Poppins'] text-white/90">Trusted By 10,000++ Researchers</span>
                        </div>
                        <h1 className="text-[38px] md:text-[48px] font-bold font-['Poppins'] leading-[1.15]">
                            Premium Research Materials.
                        </h1>
                        <h2 className="text-[28px] md:text-[36px] font-semibold font-['Poppins'] leading-tight text-[#d4a843]">
                            Verified Down To The Batch.
                        </h2>
                        <p className="text-[15px] md:text-[17px] text-white/80 font-['Poppins'] font-normal leading-[1.7] max-w-[560px]">
                            Every Product Is Third-Party Tested With Full HPLC Documentation.<br />Confidence Isn't Claimed - It's Documented.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            <Link to="/products" className="bg-[#116190] hover:bg-[#0c4a6e] text-white rounded-[9px] px-8 py-3.5 flex items-center justify-center gap-2 font-medium text-[15px] transition-colors">
                                Shop Best Sellers <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link to="/verify" className="bg-transparent border border-[#116190] hover:bg-[#116190]/10 text-white rounded-[9px] px-8 py-3.5 flex items-center justify-center font-medium text-[15px] transition-colors">
                                Verify A Batch
                            </Link>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <div className="w-full lg:max-w-[640px] flex flex-col gap-4">
                            <div className="bg-white/10 border border-white/20 rounded-[15px] p-7 w-full">
                                <div className="flex items-center gap-1 text-[#d4a843] mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-[16px] h-[16px] fill-current" />
                                    ))}
                                </div>
                                <p className="text-white text-[15px] italic leading-[1.6] mb-3 font-['Poppins']">
                                    "COA Matched Independent Testing Perfectly. Best Purity I've Used. Reordering Monthly."
                                </p>
                                <p className="text-white font-semibold text-[13px]">— Verified Buyer</p>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="bg-white/10 border border-white/20 rounded-[8px] py-4 px-3 flex flex-col items-center text-center">
                                    <div className="flex items-center gap-1.5 mb-1.5">
                                        <ShieldCheck className="w-4 h-4 text-[#d4a843]" />
                                        <span className="text-[#d4a843] font-semibold text-[15px]">98%+</span>
                                    </div>
                                    <span className="text-white font-semibold text-[12px]">Purity</span>
                                    <span className="text-[#799bbe] text-[11px]">Verified</span>
                                </div>
                                <div className="bg-white/10 border border-white/20 rounded-[8px] py-4 px-3 flex flex-col items-center text-center">
                                    <div className="flex items-center gap-1.5 mb-1.5">
                                        <Package className="w-4 h-4 text-[#d4a843]" />
                                        <span className="text-[#d4a843] font-semibold text-[15px]">50K+</span>
                                    </div>
                                    <span className="text-white font-semibold text-[12px]">Orders</span>
                                    <span className="text-[#799bbe] text-[11px]">Delivered</span>
                                </div>
                                <div className="bg-white/10 border border-white/20 rounded-[8px] py-4 px-3 flex flex-col items-center text-center">
                                    <div className="flex items-center gap-1.5 mb-1.5">
                                        <Star className="w-4 h-4 fill-[#d4a843] text-[#d4a843]" />
                                        <span className="text-[#d4a843] font-semibold text-[15px]">4.9/5</span>
                                    </div>
                                    <span className="text-white font-semibold text-[12px]">Customer</span>
                                    <span className="text-[#799bbe] text-[11px]">Rating</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS SECTION */}
            <section className="w-full bg-[rgba(17,97,144,0.05)] flex justify-center py-8 shadow-[0_-2px_10px_rgba(0,0,0,0.02)]">
                <div className="max-w-[1300px] w-full px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex items-center group">
                            <div className="size-[64px] rounded-full bg-[#e8f1f6] flex items-center justify-center text-[#116190] shrink-0">
                                <FlaskConical className="w-7 h-7" strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col ml-4">
                                <h3 className="text-[#08202c] font-semibold text-[15px] font-['Poppins'] mb-1">
                                    3rd Party <span className="text-[#116190]">Tested</span>
                                </h3>
                                <p className="text-gray-500 text-[12px] leading-relaxed max-w-[180px]">
                                    Every batch independently verified for purity and quality
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center group">
                            <div className="size-[64px] rounded-full bg-[#e8f1f6] flex items-center justify-center text-[#116190] shrink-0">
                                <Truck className="w-7 h-7" strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col ml-4">
                                <h3 className="text-[#08202c] font-semibold text-[15px] font-['Poppins'] mb-1">
                                    Fast <span className="text-[#116190]">Shipping</span>
                                </h3>
                                <p className="text-gray-500 text-[12px] leading-relaxed max-w-[180px]">
                                    Same-day shipping on orders before 12pm CST
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center group">
                            <div className="size-[64px] rounded-full bg-[#e8f1f6] flex items-center justify-center text-[#116190] shrink-0">
                                <MessageCircle className="w-7 h-7" strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col ml-4">
                                <h3 className="text-[#08202c] font-semibold text-[15px] font-['Poppins'] mb-1">
                                    Expert <span className="text-[#116190]">Support</span>
                                </h3>
                                <p className="text-gray-500 text-[12px] leading-relaxed max-w-[180px]">
                                    24/7 Customer Support From research specialists
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center group">
                            <div className="size-[64px] rounded-full bg-[#e8f1f6] flex items-center justify-center text-[#116190] shrink-0">
                                <Lock className="w-7 h-7" strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col ml-4">
                                <h3 className="text-[#08202c] font-semibold text-[15px] font-['Poppins'] mb-1">
                                    Secure <span className="text-[#116190]">& Safe</span>
                                </h3>
                                <p className="text-gray-500 text-[12px] leading-relaxed max-w-[180px]">
                                    SSL encrypted checkout and discreet packaging
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SHOP BY CATEGORY */}
            <section className="w-full max-w-[1300px] px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-[#08202c] font-semibold text-[28px] md:text-[36px] font-['Poppins']">
                        Shop by <span className="text-[#116190]">Category</span>
                    </h2>
                    <Link to="/products" className="bg-[#116190] hover:bg-[#0c4a6e] text-white rounded-full px-6 py-2.5 flex items-center gap-2 font-medium text-[14px] transition-colors">
                        See All Products <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="relative group">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={16}
                        slidesPerView={2}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 6 },
                        }}
                        navigation={{
                            prevEl: '.cat-prev',
                            nextEl: '.cat-next',
                        }}
                        className="py-4 px-1"
                    >
                        {categories.map((cat, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="bg-white rounded-[12px] border border-gray-200 p-5 flex flex-col items-center justify-center hover:border-[#116190]/40 hover:shadow-md transition-all cursor-pointer h-[180px] group/card">
                                    <div className="w-[90px] h-[90px] rounded-[10px] bg-[#f8fafc] flex items-center justify-center mb-4 group-hover/card:scale-105 transition-transform">
                                        <img src={cat.icon} alt={cat.title} className="w-[50px] h-[50px] object-contain" onError={(e) => { e.target.src = `https://placehold.co/50x50/116190/ffffff?text=${cat.title.charAt(0)}`; }} />
                                    </div>
                                    <h3 className="text-[#116190] font-semibold text-[15px] mb-1 font-['Poppins']">{cat.title}</h3>
                                    <span className="text-gray-400 text-[12px]">{cat.products} Products</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button className="cat-prev absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 size-[40px] bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-[#08202c] hover:bg-gray-50 focus:outline-none">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button className="cat-next absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 size-[40px] bg-[#116190] rounded-full shadow-md flex items-center justify-center text-white hover:bg-[#0c4a6e] focus:outline-none">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </section>

            {/* QUALITY ASSURANCE CARDS */}
            <section className="w-full bg-[#f9fafb] py-10 mt-10">
                <div className="max-w-[1300px] w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="bg-white border border-[rgba(17,97,144,0.15)] rounded-[12px] p-6 relative">
                            <span className="absolute top-5 right-5 bg-[rgba(17,97,144,0.1)] text-[#116190] px-3 py-1 rounded text-[13px] font-medium">
                                HPLC
                            </span>
                            <h3 className="text-[#d4a843] font-semibold text-[17px] font-['Poppins'] mb-2 mt-6">
                                Purity & Identity
                            </h3>
                            <p className="text-gray-500 text-[13px] leading-relaxed">
                                Confirms compound identity and purity for each batch. Certificates available per SKU / lot.
                            </p>
                        </div>
                        <div className="bg-white border border-[rgba(17,97,144,0.15)] rounded-[12px] p-6 relative">
                            <span className="absolute top-5 right-5 bg-[rgba(17,97,144,0.1)] text-[#116190] px-3 py-1 rounded text-[13px] font-medium">
                                QC
                            </span>
                            <h3 className="text-[#d4a843] font-semibold text-[17px] font-['Poppins'] mb-2 mt-6">
                                Sterility & Endotoxin
                            </h3>
                            <p className="text-gray-500 text-[13px] leading-relaxed">
                                Quality assurance checks supporting consistent lab research handling and storage standards.
                            </p>
                        </div>
                        <div className="bg-white border border-[rgba(17,97,144,0.15)] rounded-[12px] p-6 relative">
                            <span className="absolute top-5 right-5 bg-[rgba(17,97,144,0.1)] text-[#116190] px-3 py-1 rounded text-[13px] font-medium">
                                Batch
                            </span>
                            <h3 className="text-[#d4a843] font-semibold text-[17px] font-['Poppins'] mb-2 mt-6">
                                Batch Traceability
                            </h3>
                            <p className="text-gray-500 text-[13px] leading-relaxed">
                                Each product is tied to a batch number for quick verification and repeatable re-orders.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR BEST SELLING PRODUCTS */}
            <section className="w-full max-w-[1300px] px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-[#08202c] font-semibold text-[26px] md:text-[34px] font-['Poppins']">
                        Our Best <span className="text-[#116190]">Selling Products</span>
                    </h2>
                    <Link to="/products?filter=bestsellers" className="bg-[#116190] hover:bg-[#0c4a6e] text-white rounded-full px-6 py-2.5 flex items-center gap-2 font-medium text-[14px] transition-colors">
                        View All <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {bestSellingProducts.map((p, i) => <ProductCard key={i} product={p} isFilled={i === 0} />)}
                </div>
            </section>

            {/* VERIFIED TRANSPARENT TRUSTED BANNER */}
            <section className="w-full bg-[#f0f4f8] py-14 mt-16">
                <div className="max-w-[1300px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                    <div className="bg-[rgba(212,168,67,0.15)] text-[#d4a843] px-5 py-2 rounded-full font-semibold text-[13px] mb-5">
                        Premium Quality – 98%+ Purity Guaranteed
                    </div>
                    <h2 className="text-[32px] md:text-[46px] font-bold font-['Montserrat'] text-[#116190] mb-4 italic">
                        Verified. Transparent. <span className="text-[#d4a843]">Trusted.</span>
                    </h2>
                    <p className="text-[#08202c] text-[15px] md:text-[17px] max-w-[700px] mb-10 font-['Poppins']">
                        Modern Aminos publishes full lab verification and batch traceability so you can research with confidence.
                    </p>
                    <div className="bg-[#024268] rounded-[14px] px-8 py-5 flex items-center gap-8 md:gap-14 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-[40px] h-[40px] bg-white/10 rounded-lg flex items-center justify-center">
                                <FlaskConical className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold text-[18px]">500+</p>
                                <p className="text-white/70 text-[11px]">COAs Published</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-[40px] h-[40px] bg-white/10 rounded-lg flex items-center justify-center">
                                <Package className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold text-[18px]">50k+</p>
                                <p className="text-white/70 text-[11px]">Orders Shipped</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-[40px] h-[40px] bg-white/10 rounded-lg flex items-center justify-center">
                                <Star className="w-5 h-5 fill-[#d4a843] text-[#d4a843]" />
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold text-[18px]">4.9/5</p>
                                <p className="text-white/70 text-[11px]">Trustpilot Rating</p>
                            </div>
                        </div>
                    </div>
                    <Link to="/products" className="bg-[#116190] hover:bg-[#0c4a6e] text-white rounded-full px-7 py-3 flex items-center gap-2 font-semibold text-[14px] transition-colors">
                        Browse All Products <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="w-full max-w-[1300px] px-4 sm:px-6 lg:px-8 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {testimonials.map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
                </div>
                <div className="flex items-center justify-center gap-2 mt-8 pt-8 border-t border-gray-100">
                    <Star className="w-4 h-4 fill-[#00b67a] text-[#00b67a]" />
                    <span className="text-[#00b67a] font-semibold text-[15px]">Trustpilot</span>
                    <span className="text-[#08202c] font-bold text-[15px]">4.9 / 5</span>
                    <span className="text-[#08202c] font-medium text-[15px]">- 1000+ Verified Reviews</span>
                </div>
            </section>

            {/* NEW ARRIVALS */}
            <section className="w-full max-w-[1300px] px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-[#08202c] font-semibold text-[26px] md:text-[34px] font-['Poppins']">
                        New <span className="text-[#116190]">Arrivals</span>
                    </h2>
                    <Link to="/products?filter=new" className="bg-[#116190] hover:bg-[#0c4a6e] text-white rounded-full px-6 py-2.5 flex items-center gap-2 font-medium text-[14px] transition-colors">
                        View All <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {newArrivals.map((p, i) => <ProductCard key={i} product={p} />)}
                </div>
            </section>

            {/* COMING SOON */}
            <section className="w-full bg-[#f5f7f9] py-14 mt-16">
                <div className="max-w-[1300px] w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-[#08202c] font-semibold text-[26px] md:text-[34px] font-['Poppins']">
                            Coming <span className="text-[#116190]">Soon</span>
                        </h2>
                        <Link to="/products?filter=coming-soon" className="bg-[#116190] hover:bg-[#0c4a6e] text-white rounded-full px-6 py-2.5 flex items-center gap-2 font-medium text-[14px] transition-colors">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {comingSoonProducts.map((p, i) => <ProductCard key={i} product={p} />)}
                    </div>
                </div>
            </section>

            {/* HIGHLIGHT PRODUCTS */}
            <section className="w-full max-w-[1300px] px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-[#08202c] font-semibold text-[26px] md:text-[34px] font-['Poppins']">
                        Highlight <span className="text-[#116190]">Products</span>
                    </h2>
                    <Link to="/products?filter=highlight" className="bg-[#116190] hover:bg-[#0c4a6e] text-white rounded-full px-6 py-2.5 flex items-center gap-2 font-medium text-[14px] transition-colors">
                        View All <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {highlightProducts.map((p, i) => <ProductCard key={i} product={p} />)}
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="w-full max-w-[1244px] mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-[#08202c] font-semibold text-[28px] md:text-[36px] font-['Poppins']">
                        Frequently Asked <span className="text-[#116190]">Questions</span>
                    </h2>
                    <Link to="/faq" className="bg-[#116190] hover:bg-[#0c4a6e] text-white rounded-full px-6 py-2.5 flex items-center gap-2 font-medium text-[14px] transition-colors">
                        View All <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="w-full rounded-[15px] overflow-hidden transition-all duration-300 border border-[rgba(17,97,144,0.2)] bg-white"
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="font-semibold text-[15px] md:text-[16px] font-['Poppins'] text-[#08202c] pr-4">
                                    {faq.q}
                                </span>
                                <div className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${openFaq === i ? 'bg-[#116190] text-white' : 'bg-[#e8f1f6] text-[#116190]'}`}>
                                    {openFaq === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </div>
                            </button>
                            {openFaq === i && (
                                <div className="px-8 pb-6 text-[14px] text-gray-600 leading-[1.8] bg-[#f8fafc] border-t border-gray-100">
                                    <p className="pt-5">{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
