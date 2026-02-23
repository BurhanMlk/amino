import { Mail, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#113b54] text-white pt-10 md:pt-20 pb-10 px-6 sm:px-10 lg:px-[74px]">
            <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-[148px] mb-16">
                {/* Brand Column */}
                <div className="flex flex-col gap-[13px] w-full max-w-[364px]">
                    <div className="flex items-center">
                        <img src="/logo.png" alt="Modern Aminos" className="h-[53px] w-auto brightness-0 invert" />
                    </div>
                    <p className="text-[14px] text-white font-['Poppins'] leading-[26px]">
                        Quality products and exceptional service are very important to us
                    </p>
                </div>

                {/* Contact and Links */}
                <div className="flex flex-col gap-[34px] w-full max-w-[216px]">
                    <div className="flex flex-col gap-[14px]">
                        <h3 className="text-[18px] font-semibold text-white font-['Poppins'] leading-[26px]">Contact us</h3>
                        <div className="flex items-center gap-[12px] text-[14px] text-white font-['Poppins']">
                            <Mail className="w-[21px] h-[19px]" />
                            <span>cs@modernaminos.com</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[9px]">
                        <h3 className="text-[18px] font-semibold text-white font-['Poppins'] leading-[26px]">Quick Links</h3>
                        <ul className="flex flex-col gap-[3px] text-[14px] text-white font-['Poppins']">
                            <li><a href="#" className="leading-[1.6]">Home</a></li>
                            <li><a href="#" className="leading-[1.6]">Contact us</a></li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="flex flex-col gap-[14px] w-full max-w-[364px]">
                    <h3 className="text-[18px] font-semibold text-white font-['Poppins'] leading-[26px] capitalize">Subscribe now to save 10%</h3>
                    <p className="text-[14px] text-white font-['Poppins'] leading-[26px]">
                        Subscribe and Get Exclusive Updates Straight to your Inbox for Free
                    </p>
                    <div className="relative w-full max-w-[363px] h-[50px]">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full h-full bg-transparent border border-white rounded-full px-[21px] text-[14px] text-white placeholder:text-white/70 focus:outline-none font-['Poppins']"
                        />
                        <button className="absolute right-0 top-0 h-full bg-white text-[#106090] font-medium px-[25px] rounded-r-full flex items-center gap-1 hover:bg-gray-100 transition-colors font-['Poppins']">
                            <Send className="w-5 h-5" /> Send
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto flex flex-col gap-10 md:gap-[65px] items-center">
                <p className="text-[12px] md:text-[14px] text-white leading-[21px] md:leading-[31px] font-['Poppins'] text-center max-w-[1155px]">
                    <span className="font-medium">PLEASE BE ADVISED:</span> All compounds and research materials provided by Modern Aminos are strictly for laboratory and research use only. They are not approved for human consumption by the Food and Drug Administration (FDA). These products should not be used for any form of in vivo experimentation or for any other non-laboratory purpose. By purchasing these products, you acknowledge that they will be used exclusively within a controlled and qualified research environment.
                </p>

                <div className="w-full h-[1px] bg-white/20"></div>

                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 text-[14px] text-white font-['Poppins'] font-medium">
                    <div className="flex flex-col items-center md:items-start gap-1 font-normal text-[12px] order-1 md:order-2">
                        <div className="flex items-center gap-4">
                            <a href="#">Privacy Policy</a>
                            <span className="md:hidden">|</span>
                            <a href="#">Refund Policy</a>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="#">Terms & Conditions</a>
                            <span className="md:hidden">|</span>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>
                    <div className="capitalize text-[14px] order-2 md:order-1">
                        Copyright 2026, All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
