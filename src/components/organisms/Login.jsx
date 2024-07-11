import React from 'react';
import { LoginForm } from '../molecules/LoginForm';

export const Login = () => {
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row w-full h-screen bg-gray-100">
      {/* Left section with form */}
      <div className="flex w-[430px] h-[500px] items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col items-center mb-6">
            <img src="logoProyeccto-removebg.png" alt="Logo" className="w-40 h-40 mb-4" />
            <h2 className="text-3xl font-extrabold text-center text-gray-800">Maddac Coffee</h2>
          </div>

          <LoginForm />


        </div>
      </div>

      {/* Right section with image gallery */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="caficultor.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="caficultor.jpg"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="caficultor.jpg"
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="caficultor.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="caficultor.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="caficultor.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
