import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <footer className="bg-gray-800 py-8">
                <div className="flex flex-col mx-auto px-8 text-center">
                    <p className="text-gray-400">© 2023 Trialhub. All rights reserved.</p>
                    <div className="flex flex-col justify-center items-center mt-4">
                        <div className='my-2'>
                            <a href="#" className="text-gray-400 hover:text-white mx-3 hover:text-[#FF725E]">Terms of Service</a>
                            <span className="text-gray-400">|</span>
                            <a href="#" className="text-gray-400 hover:text-white mx-3 hover:text-[#FF725E]">Privacy Policy</a>
                            <span className="text-gray-400">|</span>
                            <a href="#" className="text-gray-400 hover:text-white mx-3 hover:text-[#FF725E]">Contact Us</a>
                        </div>

                        <div className='my-2'>
                            <a href="https://www.linkedin.com/company/trialshoppy/" target='_blank' rel="noreferrer" className="text-gray-400 hover:text-white mx-3 hover:text-[#FF725E]">LinkedIn</a>
                            <span className="text-gray-400 hover:text-[#FF725E]">|</span>
                            <a href="https://www.instagram.com/trialshoppy/" target='_blank' rel="noreferrer" className="text-gray-400 hover:text-white mx-3 hover:text-[#FF725E]">Instagram</a>
                            <span className="text-gray-400">|</span>
                            <a href="#" className="text-gray-400 hover:text-white mx-3 hover:text-[#FF725E]">Twitter</a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;