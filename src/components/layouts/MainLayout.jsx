import React from 'react';
import Sidebar from "../molecules/Sidebar";
import Navbar from '../organisms/Navbar';

const MainLayout = ({ children }) => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 max-h-screen overflow-y-auto">
                <Navbar/>
                <div className='w-full h-full p-5'>
                {children}
                </div>
            </main>
        </div>
    );
};

export default MainLayout;
