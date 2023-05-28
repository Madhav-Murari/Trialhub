import Head from "next/head";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export default function SignupPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <Head>
          <title>Signup - Trialhub</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center flex-1 w-full h-screen text-center sm:p-20 ">
          <div className="flex max-w-4xl bg-white shadow-2xl w-7/8 lg:w-2/3 rounded-2xl sm:shrink-0">
            <div className="flex flex-col w-full px-6 py-2 md:w-1/2 md:p-16 ">
              <div className="font-bold text-left">
                <span className="text-orange-400">Trail</span>
                Shoppy
              </div>
              <div className="py-10">
                <h2 className="mb-2 text-2xl font-bold">Sign in to Account</h2>
                <div className="flex justify-center my-2">
                  <a
                    href="#"
                    className="p-3 mx-1 border-2 border-gray-200 rounded-full"
                  >
                    <FaFacebookF className="text-sm" />
                  </a>
                  <a
                    href="#"
                    className="p-3 mx-1 border-2 border-gray-200 rounded-full"
                  >
                    <FaLinkedinIn className="text-sm" />
                  </a>
                  <a
                    href="#"
                    className="p-3 mx-1 border-2 border-gray-200 rounded-full"
                  >
                    <FaGoogle className="text-sm" />
                  </a>
                </div>
                <p className="my-3 text-gray-400">or use email account?</p>

                <div className="flex flex-col items-center mb-3">
                  <div className="flex items-center w-64 p-2 bg-gray-100 ">
                    <FaRegEnvelope className="text=gray-300 mr-2" />
                    <input
                      className="flex-1 text-sm bg-gray-100 outline-none "
                      type="email"
                      name="email"
                      placeholder="User ID/Email"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center w-64 p-2 bg-gray-100 ">
                    <MdLockOutline className="text=gray-300 mr-2" />
                    <input
                      className="text-sm bg-gray-100 outline-none "
                      type="password"
                      name="Password"
                      placeholder="PassWord"
                    />
                  </div>

                  <div className="flex justify-between w-64 mb-5">
                    <label className="flex items-center text-xs">
                      <input type="checkbox" name="remember" className="mr-1" />
                      Remember Me{" "}
                    </label>
                    <a href="#" className="text-sm">
                      Forget PassWord?
                    </a>
                  </div>
                  <Link
                    href="/dashboard"
                    className="inline-block px-12 py-2 font-semibold border-2 rounded-full border-orange hover:bg-orange-300 hover:text-black-400"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden w-full p-6 bg-orange-200 md:p-8 md:w-1/2 lg:p-32 md:block rounded-2xl">
              <h2 className="mb-2 text-3xl font-bold">Hello, User!</h2>
              <div className="inline-block w-10 mb-2 border-2 border-white"></div>
              <p className="mb-10">
                Fill up personal information and start journey with us.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
