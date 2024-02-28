// components/Separator.js
import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-row sm:flex-row justify-between items-center">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/images/logo_portfolio-removebg-preview.png" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Charles de Feligonde</span>
            </a>
            <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                <li>
                    <a href="https://github.com/Charl2fde" className="hover:underline me-4 md:me-6">Github</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 C2fde. All Rights Reserved.</span>
    </div>
</footer>

    );
};

export default Footer;
