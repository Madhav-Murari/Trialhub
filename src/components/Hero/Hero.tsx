import React, { useState, useEffect } from "react";
import HeroImage from "../../assets/HeroImage.svg";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      setAuth(JSON.parse(userDataString));
    }
  }, []);

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-10">
        <div className="text-[2rem] text-gray-600 md:text-[3rem] font-semibold text-gray-800">
          Welcome to
          <span className="text-primary"> Trial</span>
          Hub
        </div>
        <p className="mt-4 text-lg text-gray-600">
          Efficient Employee Management Services
        </p>
        <Link
          href={auth ? "/dashboard" : "/signup"}
          className="bg-primary text-white rounded-md px-4 py-2 my-3"
        >
          {auth ? "Go to dashboard" : "Join us now"}
        </Link>
        <Image
          className="w-3/3 md:w-2/3 lg:w-2/4"
          src={HeroImage}
          alt="Hero"
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/png..." />
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="flex flex-col mx-auto px-8">
          <h2 className="text-[2rem] font-semibold text-gray-800 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800">
                Employee Tracking
              </h3>
              <p className="mt-4 text-gray-600">
                Monitor your employees' attendance, working hours, and
                productivity with ease.
              </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800">
                Task Management
              </h3>
              <p className="mt-4 text-gray-600">
                Assign tasks, set deadlines, and track progress seamlessly
                within the Trialhub platform.
              </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800">
                Leave Management
              </h3>
              <p className="mt-4 text-gray-600">
                Streamline the process of requesting and approving leaves for
                your employees.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
