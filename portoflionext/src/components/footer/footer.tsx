import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#181818' }}>
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex flex-row justify-between items-center">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/images/logo_portfolio-removebg-preview.png" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Charles de Feligonde</span>
                    </a>
                    <ul className="flex flex-wrap items-center text-sm font-medium">
                        <li>
                            <a href="https://github.com/Charl2fde" className="hover:underline me-4 md:me-6 text-white">Github</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6 text-white">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6 text-white">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline text-white">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 border-gray-700" />
                <span className="block text-sm sm:text-center text-gray-400">© 2024 C2fde. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
