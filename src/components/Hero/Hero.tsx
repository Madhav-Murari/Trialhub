import React from 'react';
import HeroImage from '../../assets/HeroImage.svg';
import Image from 'next/image';
import Footer from './Footer';

const Hero: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center py-20">
                <div className="text-[2rem] md:text-[3rem] font-bold text-gray-800">Welcome to Trialhub</div>
                <p className="mt-4 text-lg text-gray-600">Efficient Employee Management Services</p>
                <Image className="mt-12 w-2/3 md:w-2/3 lg:w-2/4" src={HeroImage} alt="Hero" />
            </section>

            {/* Features Section */}
            <section className="bg-white py-20">
                <div className="flex flex-col mx-auto px-8">
                    <h2 className="text-3xl font-bold text-gray-800 text-center">Key Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-gray-200 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-gray-800">Employee Tracking</h3>
                            <p className="mt-4 text-gray-600">
                                Monitor your employees' attendance, working hours, and productivity with ease.
                            </p>
                        </div>
                        <div className="bg-gray-200 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-gray-800">Task Management</h3>
                            <p className="mt-4 text-gray-600">
                                Assign tasks, set deadlines, and track progress seamlessly within the Trialhub platform.
                            </p>
                        </div>
                        <div className="bg-gray-200 p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-gray-800">Leave Management</h3>
                            <p className="mt-4 text-gray-600">
                                Streamline the process of requesting and approving leaves for your employees.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    );
};

export default Hero;
