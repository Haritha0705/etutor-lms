import React from "react";
import Button from "../Components/Button.tsx";
import error from "../assets/image/404error.svg";


const ErrorPage:React.FC = ()=> {
    return (
        <div className="w-full  flex flex-col md:flex-row items-center justify-center px-6 py-10 gap-10">
            <div className="flex flex-col max-w-md gap-5 text-center md:text-left">
                <h1 className="text-7xl text-gray-500/30 font-semibold">Error 404</h1>
                <h2 className="text-4xl font-bold">Oops! Page not found</h2>
                <p className="text-gray-600">
                    Something went wrong. It looks like the page you requested could not be found. The link might be broken or the page has been removed.
                </p>
                <div className="flex justify-center md:justify-start">
                    <Button text="Go Back" className="w-fit px-2" size="sm" />
                </div>
            </div>
            <div className="max-w-md">
                <img src={error} alt="404 Error Illustration" className="w-full h-auto" />
            </div>
        </div>
    );
}

export default ErrorPage;
