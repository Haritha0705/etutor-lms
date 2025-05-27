import logo from '../../assets/icons/GraduationCap.svg';
import bell from '../../assets/icons/BellSimple.svg';
import hart from '../../assets/icons/Heart.svg';
import cart from '../../assets/icons/ShoppingCart.svg';
import search from '../../assets/icons/MagnifyingGlass.svg';
import down from '../../assets/icons/ChevronDown.svg';
import Button from "./Button.tsx";
import { Link, useLocation } from 'react-router-dom';
import React from "react";

const Nav_Bar:React.FC = ()=> {
    const location = useLocation(); // 👈 for active styling
    const pages = ['Home', 'Courses', 'About', 'Contact', 'Become an Instructor'];
    const pagesLink = ['/', '/courses', '/about', '/contact', '/become_an_instructor'];

    const pageList = pages.map((page, index) => {
        const isActive = location.pathname === pagesLink[index];
        return (
            <li key={page}>
                <Link
                    to={pagesLink[index]}
                    className={`${
                        isActive ? 'text-white font-semibold' : 'text-gray-500'
                    } hover:text-white transition`}
                >
                    {page}
                </Link>
            </li>
        );
    });

    return (
        <header className="fixed w-full top-0 left-0 right-0 shadow z-50">
            <ul className="flex flex-row gap-5 text-sm bg-black font-inter py-3 px-7">
                {pageList}
            </ul>

            <div className="bg-white py-5 px-5 flex items-center justify-between">
                <div className="flex flex-row gap-6">
                    <div className="flex gap-2 items-center">
                        <img src={logo} alt="Logo" className="w-10" />
                        <span className="text-3xl font-medium">E-tuter</span>
                    </div>

                    <div className="relative justify-center items-center flex">
                        <input
                            className="border px-4 py-2 rounded w-44 pr-10 text-sm border-gray-200"
                            placeholder="Browse"
                        />
                        <img
                            src={down}
                            className="w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        />
                    </div>

                    <div className="relative justify-center items-center flex">
                        <input
                            className="border pr-4 pl-10 py-2 rounded w-64 text-sm border-gray-200"
                            placeholder="What do you want to learn"
                        />
                        <img
                            src={search}
                            className="w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        />
                    </div>
                </div>

                <div className="flex gap-5 items-center">
                    <img src={bell} alt="bell" className="w-5 h-5" />
                    <img src={hart} alt="heart" className="w-5 h-5" />
                    <img src={cart} alt="cart" className="w-5 h-5" />
                    <Button className="justify-center" text="Create Account" colours="secondary-primary" size="sm" />
                    <Button className="justify-center" text="Sign In" colours="primary-primary" size="sm" />
                </div>
            </div>
        </header>
    );
}

export default Nav_Bar;
