import React from "react";
import Button from "../../Components/Shared/Button.tsx";
import logo from '../../assets/icons/GraduationCap.svg';
import loginImg from '../../assets/image/login.jpg';
import Google from '../../assets/icons/googleLogo.svg';
import Facebook from '../../assets/icons/FacebookLogo.svg';
import Apple from '../../assets/icons/AppleLogo.svg';
import Arrow from '../../assets/icons/ArrowRightW.svg';


const Login:React.FC = () => {
    return (
        <div className="min-h-screen w-full bg-white flex flex-col">
            {/* Header */}
            <header className="flex items-center justify-between py-5 px-4 sm:px-6 lg:px-10 border-b border-gray-300 flex-wrap">
                <div className="flex gap-2 items-center">
                    <img src={logo} alt="Graduation Cap Logo" className="w-10" />
                    <span className="text-2xl sm:text-3xl font-semibold text-gray-800">E-tuter</span>
                </div>
                <div className="flex gap-3 items-center text-sm sm:text-base mt-3 sm:mt-0">
                    <p className="text-gray-600">Don’t have account?</p>
                    <Button colours={'secondary-primary'} text={'Create Account'} className={'justify-center'} />
                </div>
            </header>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row flex-grow bg-white">
                {/* Left Image Section */}
                <div className="hidden lg:flex w-1/2 items-center justify-center">
                    <img src={loginImg} alt="Register Illustration" className="max-h-[90%] object-contain" />
                </div>

                {/* Right Form Section */}
                <div className="flex justify-center items-center w-full">
                    <div className="w-full max-w-[700px] bg-[#EBEBFF] px-6 sm:px-10 lg:px-20 py-10 rounded-md shadow-md">
                        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6">
                            Sign in to your account
                        </h1>

                        <form className="flex flex-col gap-5">
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email address"
                                    className="border border-gray-300 p-2 w-full rounded outline-none focus:ring-2 focus:ring-indigo-300"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1 block">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Create password"
                                    className="border border-gray-300 p-2 w-full rounded outline-none focus:ring-2 focus:ring-indigo-300"
                                />
                            </div>

                            {/* Terms and Button */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <label className="flex items-center gap-2 text-sm text-gray-700">
                                    <input type="checkbox" className="accent-indigo-600" />
                                    <span>Remember me</span>
                                </label>
                                <Button text={'Sign In'} icon={Arrow} className={'items-center px-8 justify-between'} />
                            </div>

                            {/* Social Login */}
                            <div className="text-center mt-6">
                                <p className="text-sm text-gray-600 mb-3">OR SIGN UP WITH</p>
                                <div className="flex justify-center flex-wrap gap-4">
                                    <button type="button" className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition">
                                        <img src={Google} alt="Google logo" className="w-5 h-5" />
                                        <span className="text-sm">Google</span>
                                    </button>
                                    <button type="button" className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition">
                                        <img src={Facebook} alt="Facebook logo" className="w-5 h-5" />
                                        <span className="text-sm">Facebook</span>
                                    </button>
                                    <button type="button" className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition">
                                        <img src={Apple} alt="Apple logo" className="w-5 h-5" />
                                        <span className="text-sm">Apple</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

