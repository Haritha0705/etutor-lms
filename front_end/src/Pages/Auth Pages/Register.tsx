import React from "react";
import Button from "../../Components/Button.tsx";
import logo from '../../assets/icons/GraduationCap.svg';
import registerImg from '../../assets/image/Register.svg';
import Google from '../../assets/icons/googleLogo.svg';
import Facebook from '../../assets/icons/FacebookLogo.svg';
import Apple from '../../assets/icons/AppleLogo.svg';
import Arrow from '../../assets/icons/ArrowRightW.svg';


const Register:React.FC = ()=> {
    return (
        <div className="min-h-screen w-full bg-white flex flex-col">
            {/* Header */}
            <header className="flex items-center justify-between py-5 px-4 sm:px-6 lg:px-10 border-b border-gray-300 flex-wrap">
                <div className="flex gap-2 items-center">
                    <img src={logo} alt="Graduation Cap Logo" className="w-10" />
                    <span className="text-2xl sm:text-3xl font-semibold text-gray-800">E-tuter</span>
                </div>
                <div className="flex gap-5 items-center text-sm sm:text-base mt-3 sm:mt-0">
                    <p className="text-gray-600">Already have an account?</p>
                    <Button colours="secondary-primary" text="Login" className="justify-center" />
                </div>
            </header>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row bg-[#EBEBFF] flex-grow overflow-auto">
                {/* Left Image Section */}
                <div className="hidden lg:flex w-1/2 items-center justify-center">
                    <img src={registerImg} alt="Register Illustration" className="max-h-[90%] object-contain" />
                </div>

                {/* Right Form Section */}
                <div className="flex justify-center w-full">
                    <div className="w-full max-w-[700px] bg-white px-4 sm:px-6 lg:px-20 py-10 flex flex-col justify-center">
                        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-6">
                            Create your account
                        </h1>

                        <form className="flex flex-col gap-5">
                            {/* Name */}
                            <div>
                                <label htmlFor="firstName" className="text-sm font-medium text-gray-700">Full Name</label>
                                <div className="flex flex-col sm:flex-row gap-2 mt-1">
                                    <input name="firstName" id="firstName" type="text" placeholder="First name..." className="border p-2 w-full sm:w-1/2 rounded outline-none focus:ring-2 focus:ring-indigo-300" />
                                    <input name="lastName" id="lastName" type="text" placeholder="Last name..." className="border p-2 w-full sm:w-1/2 rounded outline-none focus:ring-2 focus:ring-indigo-300" />
                                </div>
                            </div>

                            {/* Username */}
                            <div>
                                <label htmlFor="username" className="text-sm font-medium text-gray-700">Username</label>
                                <input name="username" id="username" type="text" placeholder="Username..." className="border p-2 w-full rounded outline-none focus:ring-2 focus:ring-indigo-300" />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                <input name="email" id="email" type="email" placeholder="Email address" className="border p-2 w-full rounded outline-none focus:ring-2 focus:ring-indigo-300" />
                            </div>

                            {/* Passwords */}
                            <div className="flex flex-col sm:flex-row gap-2">
                                <div className="flex flex-col w-full sm:w-1/2">
                                    <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                                    <input name="password" id="password" type="password" placeholder="Create password" className="border p-2 rounded outline-none focus:ring-2 focus:ring-indigo-300" />
                                </div>
                                <div className="flex flex-col w-full sm:w-1/2">
                                    <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">Confirm Password</label>
                                    <input name="confirmPassword" id="confirmPassword" type="password" placeholder="Confirm password" className="border p-2 rounded outline-none focus:ring-2 focus:ring-indigo-300" />
                                </div>
                            </div>

                            {/* Terms and Button */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <label className="flex items-center gap-2 text-sm text-gray-700">
                                    <input type="checkbox" className="accent-indigo-600" />
                                    <span>
                                        I agree to the <a href="#" className="text-blue-600 underline">Terms & Conditions</a>
                                    </span>
                                </label>
                                <Button
                                    type="submit"
                                    text="Create account"
                                    icon={Arrow}
                                    className="items-center px-2 justify-between"
                                />
                            </div>

                            {/* Social Login */}
                            <div className="text-center mt-4">
                                <p className="text-sm text-gray-600 mb-3">SIGN UP WITH</p>
                                <div className="flex justify-center gap-4">
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

export default Register;
