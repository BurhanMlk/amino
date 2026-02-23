import { Calendar, EyeOff, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="w-full max-w-[360px] md:max-w-[749px] bg-white md:rounded-[10px] md:shadow-[0px_1px_11px_3px_rgba(178,178,178,0.25)] p-0 md:p-12 sm:p-16 mx-auto my-10">
            <h1 className="text-[24px] md:text-[35px] font-semibold text-center text-[#08202C] mb-[27px] md:mb-[50px] font-['Poppins'] leading-tight md:leading-[55px]">Register</h1>

            <form className="flex flex-col items-center w-full">
                <div className="w-full space-y-[44px] mb-[44px]"> {/* Group spaced input fields like login */}

                    <div className="w-full">
                        <label className="block text-[18px] font-normal text-[#08202C] mb-[14px] font-['Poppins']">
                            Email Address<span className="text-[#b90404]">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full h-[60px] px-[19px] rounded-[10px] border border-[#e2e2e2] focus:outline-none focus:ring-1 focus:ring-[#116190] placeholder:text-[#C4C4C4] text-[16px] font-['Poppins']"
                        />
                    </div>

                    <div className="w-full">
                        <label className="block text-[18px] font-normal text-[#08202C] mb-[14px] font-['Poppins']">
                            Birthday <span className="text-[#C4C4C4] font-normal">(Optional)</span>
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="MM/DD/YYYY"
                                className="w-full h-[60px] px-[19px] rounded-[10px] border border-[#e2e2e2] focus:outline-none focus:ring-1 focus:ring-[#116190] placeholder:text-[#C4C4C4] text-[16px] font-['Poppins']"
                            />
                            <div className="absolute right-[19px] top-1/2 -translate-y-1/2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#116190]">
                                    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="12" cy="15" r="2" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-[12px] text-[#116190] mt-[8px] font-normal font-['Poppins'] max-w-[430px]">
                            Share your birthday with us and receive an exclusive birthday email! (Must be 18+)
                        </p>
                    </div>

                    <div className="w-full">
                        <label className="block text-[18px] font-normal text-[#08202C] mb-[14px] font-['Poppins']">
                            Password<span className="text-[#b90404]">*</span>
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="w-full h-[60px] px-[19px] rounded-[10px] border border-[#e2e2e2] focus:outline-none focus:ring-1 focus:ring-[#116190] placeholder:text-[#C4C4C4] text-[16px] font-['Poppins']"
                            />
                            <EyeOff className="absolute right-[19px] top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 cursor-pointer" />
                        </div>
                    </div>

                    <div className="w-full">
                        <label className="block text-[18px] font-normal text-[#08202C] mb-[14px] font-['Poppins']">
                            Confirm Password<span className="text-[#b90404]">*</span>
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full h-[60px] px-[19px] rounded-[10px] border border-[#e2e2e2] focus:outline-none focus:ring-1 focus:ring-[#116190] placeholder:text-[#C4C4C4] text-[16px] font-['Poppins']"
                            />
                            <EyeOff className="absolute right-[19px] top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 cursor-pointer" />
                        </div>
                    </div>

                </div> {/* End form fields wrapper */}


                <button
                    type="button"
                    className="w-full md:max-w-[456px] h-[50px] bg-[#116190] hover:bg-[#0c4a6e] text-white text-[20px] font-medium rounded-[150px] flex items-center justify-center gap-2 transition-colors font-['Poppins'] mb-[28px]"
                >
                    Login <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                </button>

                <div className="flex items-center justify-between w-full max-w-[457px] mb-[28px]">
                    <div className="h-[1px] bg-[#e2e2e2] flex-grow md:w-[159px]"></div>
                    <span className="text-[#7f7f80] text-[16px] md:text-[18px] font-normal font-['Poppins'] px-2 whitespace-nowrap">Or Sign in with</span>
                    <div className="h-[1px] bg-[#e2e2e2] flex-grow md:w-[159px]"></div>
                </div>

                <div className="flex justify-center mb-[28px]">
                    <button
                        type="button"
                        className="size-[80px] bg-white rounded-full shadow-[0px_1px_11px_3px_rgba(178,178,178,0.25)] flex items-center justify-center hover:shadow-lg transition-shadow"
                    >
                        <svg viewBox="0 0 24 24" className="w-[36px] h-[36px]">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                    </button>
                </div>

                <div className="text-center">
                    <p className="text-[#7f7f80] text-[16px] md:text-[18px] font-normal flex items-center justify-center gap-[6px] font-['Poppins']">
                        Do you already have an account?{' '}
                        <Link to="/login" className="text-[#116190] font-normal flex items-center gap-[10px]">
                            Sign In
                            <div className="rotate-[42.53deg] bg-white rounded-full flex items-center justify-center p-0.5 shadow-sm">
                                <svg className="w-[18px] h-[18px] md:w-[22px] md:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </div>
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;
