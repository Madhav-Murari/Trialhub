import React from 'react';

const About: React.FC = () => {
    return (
        <div className="h-full bg-gray-100">
            <section className="flex flex-col mx-auto px-8 py-5">
                <h1 className="text-[2rem] font-bold text-gray-800 my-3">About Trialhub</h1>
                <p className="text-lg text-gray-600 mb-4">
                    Trialhub is a leading employee management service that helps businesses efficiently manage their workforce.
                    Our mission is to simplify employee management processes and enable organizations to enhance productivity
                    and streamline operations.
                </p>
                <h2 className="text-2xl font-bold text-gray-800 my-2">Our Values</h2>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>Transparency and Trust</li>
                    <li>Employee Empowerment</li>
                    <li>Innovation and Adaptability</li>
                    <li>Collaboration and Communication</li>
                    <li>Customer-Centric Approach</li>
                </ul>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h2>
                <p className="text-lg text-gray-600 mb-4">
                    At Trialhub, we have a dedicated team of professionals with expertise in employee management, software development,
                    and customer support. We are committed to providing top-notch solutions and excellent service to our clients.
                </p>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                <p className="text-lg text-gray-600 mb-8">
                    We would love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to
                    reach out to our team. You can contact us via email, phone, or through the contact form on our website.
                </p>
                <div className="flex justify-center">
                    <button className="px-6 py-3 bg-[#FF725E] text-white font-bold rounded-md">
                        Contact Us
                    </button>
                </div>
            </section>
        </div>
    );
};

export default About;
